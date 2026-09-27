export function MicrosoftFabricSvg({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3L27 9.35V22.65L16 29L5 22.65V9.35L16 3Z" fill="#0078D4" opacity="0.12" />
            <path d="M16 3L27 9.35L16 15.7L5 9.35L16 3Z" fill="#0078D4" />
            <path d="M16 15.7L27 9.35V22.65L16 29V15.7Z" fill="#107C41" />
            <path d="M16 15.7V29L5 22.65V9.35L16 15.7Z" fill="#00838F" />
        </svg>
    );
}

