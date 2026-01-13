type EmbeddedFormProps = {
  src: string;
  title: string;
  height?: number;
  fallbackLabel?: string;
};

const EmbeddedForm = ({
  src,
  title,
  height = 720,
  fallbackLabel = "Open form in a new tab",
}: EmbeddedFormProps) => {
  return (
    <div className="space-y-3">
      <div className="rounded-3xl border border-border shadow-card overflow-hidden bg-card">
        <iframe
          src={src}
          title={title}
          height={height}
          className="w-full"
          loading="lazy"
          allowFullScreen
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Having trouble loading the form? {" "}
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="text-accent font-semibold"
        >
          {fallbackLabel}
        </a>
      </p>
    </div>
  );
};

export default EmbeddedForm;
