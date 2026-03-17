interface Props {
    label: string;
}

function ButtonSubmit({label}: Props) {
    return (
        <div>
            <button className="w-120 h-14 rounded-full bg-blue text-white font-bold">{label}</button>
        </div>
    )
}

export default ButtonSubmit