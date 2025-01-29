export default function Tag({ name }:{ name:string }) {
    return (
        <>
            <span className="bg-accent text-white rounded-full py-1 px-2 m-0.5 cursor-default">{name}</span>
        </>
    )
}