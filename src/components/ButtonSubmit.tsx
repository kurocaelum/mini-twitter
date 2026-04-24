interface Props {
    label: string;
}

export default function ButtonSubmit({label}: Props) {
    return (
        <button type="submit" className="w-120 h-14 rounded-full bg-blue text-white shadow-lg shadow-blue/20 font-bold cursor-pointer outline-navy">{label}</button>
    )
}

