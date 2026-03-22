import { Link } from "react-router-dom";

interface Props {
    label: string;
    to: string;
}

export default function ButtonSubmit({label, to}: Props) {
    return (
        <Link to={to} tabIndex={-1}>
            <button className="w-120 h-14 rounded-full bg-blue text-white shadow-lg shadow-blue/20 font-bold cursor-pointer outline-navy">{label}</button>
        </Link>
    )
}

