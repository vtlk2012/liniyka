module.exports = ({ win, input, windows, windowsLocked }) => {
    if (input.type === 'keyDown' && input.key === 'ArrowDown') {
        const bounds = win.getBounds();

        if (input.alt) {
            win.setBounds({
                height: bounds.height + (input.shift ? 10 : 1)
            });

            return;
        }

        win.setBounds({
            y: bounds.y + (input.shift ? 10 : 1)
        });
    }

    if (input.type === 'keyDown' && input.key === 'ArrowUp') {
        const bounds = win.getBounds();

        if (input.alt) {
            win.setBounds({
                height: bounds.height - (input.shift ? 10 : 1)
            });

            return;
        }

        win.setBounds({
            y: bounds.y - (input.shift ? 10 : 1)
        });
    }

    if (input.type === 'keyDown' && input.key === 'ArrowLeft') {
        const bounds = win.getBounds();

        if (input.alt) {
            win.setBounds({
                width: bounds.width - (input.shift ? 10 : 1)
            });

            return;
        }

        win.setBounds({
            x: bounds.x - (input.shift ? 10 : 1)
        });
    }

    if (input.type === 'keyDown' && input.key === 'ArrowRight') {
        const bounds = win.getBounds();

        if (input.alt) {
            win.setBounds({
                width: bounds.width + (input.shift ? 10 : 1)
            });

            return;
        }

        win.setBounds({
            x: bounds.x + (input.shift ? 10 : 1)
        });
    }
};
