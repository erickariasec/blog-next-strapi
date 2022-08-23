import Image from "next/image";

// Desestructuracion
const CardPost = ({ title, description, id, image }) => {
    return (
        <article>
            <Image
                src={`http://localhost:1337${image}`}
                width={350}
                height={200}
                alt={title}
            />
            <h2>From Card Post</h2>
        </article>
    );
}

export default CardPost;