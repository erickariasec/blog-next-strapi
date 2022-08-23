import Image from "next/image";
import styles from "../styles/CardPost.module.css";
import Link from "next/link";
import { formatDate } from "../Helpers";

// Desestructuracion
const CardPost = ({ title, description, id, image, date, url }) => {
    return (
        <Link href={`/blog/${url}`}>
            <article className={styles.cardPost}>
                <Image
                    src={`http://localhost:1337${image}`}
                    width={350}
                    height={200}
                    alt={title}
                />
                <div>
                    <h3>{title}</h3>
                    <p>{formatDate(date)}</p>
                    <p>{description}</p>
                </div>
            </article>
        </Link>
    );
}

export default CardPost;