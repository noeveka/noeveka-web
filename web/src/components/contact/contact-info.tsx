import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import LinkedInSvg from "@/components/svgs/linkedin-svg";
import { CONTACT_CONFIG } from "@/config/contact.config";

export interface ContactChannelsData {
  chat?: {
    title?: string;
    subtext?: string;
    links?: Array<{
      icon?: string;
      label?: string;
      href?: string;
      external?: boolean;
    }>;
  };
  call?: {
    title?: string;
    subtext?: string;
    links?: Array<{
      icon?: string;
      label?: string;
      href?: string;
    }>;
  };
}

export interface ContactInfoProps {
  data?: ContactChannelsData;
}

function ChannelIcon({ name }: { name: string }) {
  const cls = "h-4 w-4 shrink-0";
  switch (name) {
    case "message-circle":
    case "message-square":
      return <LucideIcon name={lucideIconRegistry.MessageSquare} className={cls} />;
    case "mail":
      return <LucideIcon name={lucideIconRegistry.Mail} className={cls} />;
    case "linkedin":
      return (
        <div className={`${cls} [&>svg]:h-4`}>
          <LinkedInSvg />
        </div>
      );
    case "phone":
      return <LucideIcon name={lucideIconRegistry.Phone} className={cls} />;
    case "map-pin":
      return <LucideIcon name={lucideIconRegistry.MapPin} className={cls} />;
    default:
      return <LucideIcon name={lucideIconRegistry.MessageSquare} className={cls} />;
  }
}

export default function ContactInfo({ data }: ContactInfoProps) {
  const chat = {
    title: data?.chat?.title ?? CONTACT_CONFIG.channels.chat.title,
    subtext: data?.chat?.subtext ?? CONTACT_CONFIG.channels.chat.subtext,
    links:
      data?.chat?.links && data.chat.links.length > 0
        ? data.chat.links
        : CONTACT_CONFIG.channels.chat.links,
  };

  return (
    <div className="flex flex-col gap-10 lg:pl-6">
      {/* Chat with us */}
      <div className="flex flex-col">
        <h3 className="contact-info-section-title">{chat.title}</h3>
        <p className="contact-info-section-sub">{chat.subtext}</p>

        <div className="mt-4 flex flex-col gap-3">
          {chat.links?.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="contact-info-link group"
            >
              <span className="contact-info-link-icon">
                <ChannelIcon name={link.icon ?? "mail"} />
              </span>
              <span className="contact-info-link-underline">{link.label}</span>
              {link.external && (
                <LucideIcon
                  name={lucideIconRegistry.ArrowUpRight}
                  className="contact-info-arrow h-3.5 w-3.5"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
