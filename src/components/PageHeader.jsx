import React from "react";

export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4 bg-transparent">
            <div id="pageheader-left" className="flex flex-col">
                <span id="pageheader-title" className="text-3xl font-semibold text-gray-800">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2 text-sm">
                    <span className="text-gray-400">Dashboard</span>
                    <span className="text-gray-300">/</span>
                    {Array.isArray(breadcrumb) ? (
                        breadcrumb.map((item, index) => (
                            <React.Fragment key={index}>
                                <span className={index === breadcrumb.length - 1 ? "text-gray-600" : "text-gray-400"}>
                                    {item}
                                </span>
                                {index !== breadcrumb.length - 1 && <span className="text-gray-300">/</span>}
                            </React.Fragment>
                        ))
                    ) : (
                        <span className="text-gray-600">{breadcrumb}</span>
                    )}
                </div>
            </div>
            {/* Slot untuk tombol Add (Children) */}
            <div id="action-button">
                {children}
            </div>
        </div>
    );
}