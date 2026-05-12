import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import products from "../data/Products.json";

export default function Products() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <PageHeader title="Products" />
            <div className="overflow-x-auto mt-6">
                <table className="min-w-full border border-gray-300 bg-white shadow-sm">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="border px-4 py-2">ID</th>
                            <th className="border px-4 py-2">Tittle</th>
                            <th className="border px-4 py-2">Code</th>
                            <th className="border px-4 py-2">Category</th>
                            <th className="border px-4 py-2">Brand</th>
                            <th className="border px-4 py-2">Price</th>
                            <th className="border px-4 py-2">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id} className="hover:bg-gray-50">
                                <td className="border px-4 py-2">{p.id}</td>
                                <td className="border px-4 py-2"> 
                                    <Link to={`/products/${p.id}`} className="text-emerald-400 hover:text-emerald-500">
                                    {p.tittle}
                                </Link>
                                </td>
                                <td className="border px-4 py-2">{p.code}</td>
                                <td className="border px-4 py-2">{p.category}</td>
                                <td className="border px-4 py-2">{p.brand}</td>
                                <td className="border px-4 py-2">Rp {p.price.toLocaleString()}</td>
                                <td className="border px-4 py-2">{p.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
