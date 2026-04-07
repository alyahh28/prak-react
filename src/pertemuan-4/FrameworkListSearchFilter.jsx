import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
    // const [searchTerm, setSearchTerm] = useState("");
    // const [selectedTag, setSelectedTag] = useState("");

    	/*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
            searcDev:"",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};

    /** Deklrasai Logic Search & Filter **/
    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name
                .toLowerCase()
                .includes(_searchTerm) ||
            framework.details.developer
                .toLowerCase()
                .includes(_searchTerm) ||
            framework.details.releaseYear
                .toString()
                .includes(_searchTerm) ||
            framework.description
                .toLowerCase()
                .includes(_searchTerm);


        const matchesTag = dataForm.selectedTag 
        ? framework.tags.includes(selectedTag) : true;
        return matchesSearch && matchesTag;
    });


    /** Deklarasi pengambilan unique tags di frameworkData **/
    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];

    return (

        <div className="p-8 bg-sky-50 min-h-screen"> {/* Background luar biru muda awan */}
            <div className="max-w-4xl mx-auto grid gap-6">

                {/* Header Section (Opsional, untuk memperkuat tema) */}
                <div className="text-center mb-4">
                    <h1 className="text-3xl font-extrabold text-sky-900 tracking-tight">
                        Pororo <span className="text-orange-500">Coding</span> Club
                    </h1>
                    <p className="text-sky-700">Ayo pelajari framework seru bersama Pororo dan teman-teman!</p>
                </div>

                <input
                    type="text"
                    name="searchTerm"
                    placeholder="Search framework..."
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    onChange={handleChange}
                />

                <select
                    name="selectedTag"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    onChange={handleChange}
                >
                    <option value="">All Tags</option>
                    {allTags.map((tag, index) => (
                        <option key={index} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>


                {filteredFrameworks.map((item) => (
                    <div key={item.id} className="border-4 border-sky-100 p-6 rounded-3xl shadow-lg bg-white relative overflow-hidden group hover:border-orange-200 transition-all duration-300">

                        {/* Dekorasi Sudut (Aksen Oranye ala paruh Pororo) */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-orange-400 rounded-bl-full opacity-20 group-hover:opacity-100 transition-opacity"></div>

                        {/* Header & Meta */}
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div>
                                <h2 className="text-2xl font-bold text-sky-950 flex items-center gap-2">
                                    {/* Ikon Kacamata Pororo Sederhana */}
                                    <span className="text-xl">👓</span>
                                    {item.name}
                                </h2>
                                <p className="text-sm font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full inline-block mt-1">
                                    Dibuat oleh: {item.details.developer} • {item.details.releaseYear}
                                </p>
                            </div>

                            <a
                                href={item.details.officialWebsite}
                                target="_blank"
                                className="text-sm font-bold text-white bg-orange-500 hover:bg-sky-600 px-5 py-2.5 rounded-full shadow-md transition-colors duration-300 transform hover:scale-105"
                            >
                                Visit Website! →
                            </a>
                        </div>

                        {/* Description */}
                        <div className="bg-slate-50 p-4 rounded-xl mb-5 border border-slate-100 relative z-10">
                            <p className="text-gray-700 leading-relaxed text-base">
                                {item.description}
                            </p>
                        </div>

                        {/* Tags (Warna-warni teman Pororo) */}
                        <div className="flex flex-wrap gap-2.5 relative z-10">
                            {item.tags.map((tag, index) => {
                                // Logika sederhana untuk variasi warna tag ala teman Pororo
                                const colors = [
                                    'bg-yellow-100 text-yellow-900 border-yellow-200', // Poby
                                    'bg-pink-100 text-pink-900 border-pink-200',     // Loopy
                                    'bg-cyan-100 text-cyan-900 border-cyan-200',     // Crong
                                    'bg-red-100 text-red-900 border-red-200'         // Eddy
                                ];
                                const colorClass = colors[index % colors.length];

                                return (
                                    <span key={index} className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border ${colorClass}`}>
                                        {tag}
                                    </span>
                                );
                            })}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}