
import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/changeTheme";

export const ThemeSelector: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [colors, setColors] = useState(theme);

    useEffect(() => {
        setColors(theme);
    }, [theme]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setColors((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setTheme(colors);
    };

    return (
        <div className="max-w-[300px] p-2 justify-start flex flex-col ">
            <h2 className="text-lg font-semibold">Change Theme</h2>
            <div className="grid grid-cols-3 gap-2 my-2">
                <div>
                    <label htmlFor="primary-color" className="block text-sm">
                        Primary
                    </label>
                    <input
                        type="color"
                        id="primary-color"
                        name="primary"
                        value={colors.primary}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="background-color" className="block text-sm">
                        Background
                    </label>
                    <input
                        type="color"
                        id="background-color"
                        name="background"
                        value={colors.background}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="text-color" className="block text-sm">
                        Text
                    </label>
                    <input
                        type="color"
                        id="text-color"
                        name="text"
                        value={colors.text}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button
                onClick={handleSave}
                className="px-3 py-2 text-sm bg-primary text-background rounded shadow"
            >
                Save
            </button>
        </div>
    );
};
