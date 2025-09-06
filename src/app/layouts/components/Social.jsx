import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Github,
  Gitlab,
  Book, // Using Book for Medium as a generic icon
  Codepen,
  KanbanSquare, // Using KanbanSquare for Bitbucket
  Dribbble,
  Behance,
  Pinterest,
  Disc, // Using Disc for Soundcloud
  Tumblr,
  Reddit,
  MessageCircle, // Using MessageCircle for VK
  Phone, // Using Phone for Whatsapp
  Camera, // Using Camera for Snapchat
  Video, // Using Video for Vimeo
  Music, // Using Music for Tiktok
  Building2, // Using Building2 for Foursquare
  Rss,
  Mail,
  Globe,
  MapPin,
  MessageSquare, // Using MessageSquare for Skype
} from 'lucide-react';

const Social = ({ source, className }) => {
  const {
    facebook,
    twitter,
    instagram,
    youtube,
    linkedin,
    github,
    gitlab,
    medium,
    codepen,
    bitbucket,
    dribbble,
    behance,
    pinterest,
    soundcloud,
    tumblr,
    reddit,
    vk,
    whatsapp,
    snapchat,
    vimeo,
    tiktok,
    foursquare,
    rss,
    email,
    phone,
    address,
    skype,
    website,
  } = source;

  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    linkedin: Linkedin,
    github: Github,
    gitlab: Gitlab,
    medium: Book,
    codepen: Codepen,
    bitbucket: KanbanSquare,
    dribbble: Dribbble,
    behance: Behance,
    pinterest: Pinterest,
    soundcloud: Disc,
    tumblr: Tumblr,
    reddit: Reddit,
    vk: MessageCircle,
    whatsapp: Phone,
    snapchat: Camera,
    vimeo: Video,
    tiktok: Music,
    foursquare: Building2,
    rss: Rss,
    email: Mail,
    phone: Phone,
    address: MapPin,
    skype: MessageSquare,
    website: Globe,
  };

  return (
    <ul className={className}>
      {Object.entries(source).map(([key, value]) => {
        const Icon = socialIcons[key];
        if (value && Icon) {
          let href;
          switch (key) {
            case 'email':
              href = `mailto:${value}`;
              break;
            case 'phone':
              href = `tel:${value}`;
              break;
            default:
              href = value;
          }
          return (
            <li className="inline-block" key={key}>
              <a
                aria-label={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block p-3 text-dark hover:text-primary"
              >
                <Icon className="h-6 w-6" />
              </a>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default Social;
