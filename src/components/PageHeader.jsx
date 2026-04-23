import { FaPlus } from "react-icons/fa";

export default function PageHeader(props) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="pageheader-title" className="text-3xl font-semibold">
                    {props.title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    <span id="breadcrumb-home" className="text-gray-500">Dashboard</span>
                    <span id="breadcrumb-separator" className="text-gray-500">/</span>
                    <span id="breadcrumb-current" className="text-gray-500">{props.title}</span>
                </div>
            </div>
            <div id="action-button">
                
                {/* Tambahkan flex dan items-center di sini */}
                <button 
                    onClick={props.onAddClick}
                    id="add-button" 
                    className="flex items-center bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                    <FaPlus className="mr-2 text-sm" /> {/* mr-2 sudah cukup untuk jarak yang pas */}
                    <span>Add {props.title}</span>
                </button>
                
            </div>
        </div>
    );
}