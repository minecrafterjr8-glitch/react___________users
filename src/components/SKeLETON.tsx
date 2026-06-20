import ContentLoader from "react-content-loader";
export default function Skeleton() {
    return (
        <ContentLoader
            speed={2}
            width={320}
            height={50}
            viewBox="0 0 320 50"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <circle cx={25} cy={25} r={25}/>
            <rect x={65} y={0} width={160} height={20} rx={6} ry={6}/>
            <rect x={65} y={30}width={90} height={20}/>
            <rect x={300} y={15} width={25} height={30}/>
        </ContentLoader>
    )
}