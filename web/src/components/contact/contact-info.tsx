import { LucideIcon } from "@/components/lucide-icons";
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

export default function ContactInfo({ data }: ContactInfoProps) {
  const chat = {
    title: data?.chat?.title ?? CONTACT_CONFIG.channels.chat.title,
    subtext: data?.chat?.subtext ?? CONTACT_CONFIG.channels.chat.subtext,
    links: data?.chat?.links && data.chat.links.length > 0 ? data.chat.links : CONTACT_CONFIG.channels.chat.links,
  };

  const call = {
    title: data?.call?.title ?? CONTACT_CONFIG.channels.call.title,
    subtext: data?.call?.subtext ?? CONTACT_CONFIG.channels.call.subtext,
    links: data?.call?.links && data.call.links.length > 0 ? data.call.links : CONTACT_CONFIG.channels.call.links,
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case "message-circle":
      case "message-square":
        return (
          <LucideIcon
            name="message-square"
            className="h-4 w-4 shrink-0 text-neutral-800 transition-colors group-hover:text-primary"
          />
        );
      case "mail":
        return (
          <LucideIcon
            name="mail"
            className="h-4 w-4 shrink-0 text-neutral-800 transition-colors group-hover:text-primary"
          />
        );
      case "linkedin":
        return (
          <div className="w-4 shrink-0 text-neutral-800 transition-colors group-hover:text-primary [&>svg]:h-4">
            <LinkedInSvg />
          </div>
        );
      case "phone":
        return (
          <LucideIcon
            name="phone"
            className="h-4 w-4 shrink-0 text-neutral-800 transition-colors group-hover:text-primary"
          />
        );
      case "map-pin":
        return (
          <LucideIcon
            name="map-pin"
            className="h-4 w-4 shrink-0 text-neutral-800 transition-colors group-hover:text-primary"
          />
        );
      default:
        return (
          <LucideIcon
            name="message-square"
            className="h-4 w-4 shrink-0 text-neutral-800 transition-colors group-hover:text-primary"
          />
        );
    }
  };

  return (
    <div className="flex flex-col gap-10 lg:pl-6">
      {/* 1. Chat with us */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold tracking-tight text-neutral-900">
          {chat.title}
        </h3>
        <p className="mt-1 text-sm text-neutral-500">{chat.subtext}</p>

        <div className="mt-4 flex flex-col gap-3">
          {chat.links?.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:text-primary"
            >
              {renderIcon(link.icon ?? "mail")}
              <span className="underline decoration-neutral-300 underline-offset-4 transition-colors group-hover:decoration-primary">
                {link.label}
              </span>
              {link.external && (
                <LucideIcon
                  name="arrow-up-right"
                  className="h-3.5 w-3.5 text-neutral-400 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* 2. Call us */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold tracking-tight text-neutral-900">
          {call.title}
        </h3>
        <p className="mt-1 text-sm text-neutral-500">{call.subtext}</p>

        <div className="mt-4 flex flex-col gap-3">
          {call.links?.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group inline-flex items-center gap-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:text-primary"
            >
              {renderIcon(link.icon ?? "phone")}
              <span className="underline decoration-neutral-300 underline-offset-4 transition-colors group-hover:decoration-primary">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 3. Visit us */}
      {/* <div className="flex flex-col">
        <h3 className="text-lg font-bold tracking-tight text-neutral-900">
          {channels.visit.title}
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          {channels.visit.subtext}
        </p>

        <div className="mt-4 flex flex-col gap-3">
          {channels.visit.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:text-primary"
            >
              {renderIcon(link.icon)}
              <span className="underline decoration-neutral-300 underline-offset-4 transition-colors group-hover:decoration-primary">
                {link.label}
              </span>
              {link.external && (
                <LucideIcon
                  name="arrow-up-right"
                  className="h-3.5 w-3.5 text-neutral-400 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                />
              )}
            </a>
          ))}
        </div>
      </div> */}
    </div>
  );
}
