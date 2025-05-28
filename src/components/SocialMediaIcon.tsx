import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISocialMediaIconProps {
    icon: IconDefinition;
    link?: string;
    text?: string;
    isBold?: boolean;
}

export const SocialMediaIcon = ({ icon, link, text, isBold = false }: ISocialMediaIconProps) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} size="2x" className="text-white" />
            {text && <span className={`ml-4 text-white text-xl ${isBold ? "font-bold" : ""}`}>{text}</span>}
        </a>
    )
}
