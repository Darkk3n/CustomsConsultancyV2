import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISocialMediaIconProps {
    icon: IconDefinition;
    link: string;
}

export const SocialMediaIcon = ({ icon, link }: ISocialMediaIconProps) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} size="2x" className="text-white" />
        </a>
    )
}
