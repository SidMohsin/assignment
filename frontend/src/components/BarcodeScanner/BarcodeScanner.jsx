import React, { useEffect } from "react";
import Quagga from "quagga";
import "./BarcodeScanner.css";

const BarcodeScanner = ({ onDetected, onClose }) => {
    useEffect(() => {
        console.log("Initializing Quagga...");

        // Initialize Quagga
        Quagga.init(
            {
                inputStream: {
                    type: "LiveStream",
                    constraints: {
                        width: 640,
                        height: 480,
                        facingMode: "environment", 
                    },
                },
                decoder: {
                    readers: [
                        "ean_reader", // EAN-13
                        "ean_8_reader", // EAN-8
                        "code_128_reader", // Code 128
                        "upc_reader", // UPC-A
                        "upc_e_reader", // UPC-E
                        "code_39_reader", // Code 39
                    ],
                },
                locate: true, // Enable barcode localization
                locator: {
                    patchSize: "medium", 
                    halfSample: true,
                },
            },
            (err) => {
                if (err) {
                    console.error("Quagga initialization failed:", err);
                    return;
                }
                console.log("Quagga initialization successful.");
                Quagga.start();
            }
        );

        // Log detection results
        Quagga.onProcessed((result) => {
            const drawingCtx = Quagga.canvas.ctx.overlay;
            const drawingCanvas = Quagga.canvas.dom.overlay;

            if (result) {
                console.log("Quagga processed a frame.");

                // Draw bounding boxes
                drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
                if (result.boxes) {
                    result.boxes
                        .filter((box) => box !== result.box)
                        .forEach((box) => {
                            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                                color: "green",
                                lineWidth: 2,
                            });
                        });
                }
                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
                        color: "#00F",
                        lineWidth: 2,
                    });
                }
            }
        });

        // Handle barcode detection
        Quagga.onDetected((data) => {
            const detectedCode = data?.codeResult?.code;
            if (detectedCode) {
                console.log("Detected barcode:", detectedCode);
                onDetected(detectedCode); // Pass the barcode to the handler
                Quagga.stop(); // Stop the scanner after detection
            } else {
                console.error("No valid barcode detected.");
            }
        });

        // Cleanup on component unmount
        return () => {
            console.log("Stopping Quagga...");
            Quagga.stop();
            Quagga.offDetected();
        };
    }, [onDetected]);

    return (
        <div className="scanner-container">
            <div id="interactive" className="viewport"></div>
            <button className="close-scanner" onClick={onClose}>
                Close
            </button>
        </div>
    );
};

export default BarcodeScanner;
