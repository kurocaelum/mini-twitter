interface Props {
    label: string;
}

export default function ButtonSubmit({label}: Props) {
    return (
        <div>
            <button className="w-120 h-14 rounded-full bg-blue text-white font-bold cursor-pointer">{label}</button>
        </div>
    )
}

