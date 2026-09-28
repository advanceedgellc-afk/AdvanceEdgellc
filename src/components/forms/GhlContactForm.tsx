"use client";

import Script from "next/script";

type GhlContactFormProps = {
  className?: string;
  iframeHeight?: number;
};

export default function GhlContactForm({
  className = "",
  iframeHeight = 531,
}: GhlContactFormProps) {
  return (
    <>
      <Script
        src="https://api.advanceedgellc.com/js/form_embed.js"
        strategy="afterInteractive"
      />

      <div
        className={`bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-2xl ${className}`}
      >
        <iframe
          src="https://api.advanceedgellc.com/widget/form/RxxqdyKUQfx1oWDQ6Sk1"
          style={{
            width: "100%",
            height: `${iframeHeight}px`,
            border: "none",
            borderRadius: "8px",
          }}
          id="inline-RxxqdyKUQfx1oWDQ6Sk1"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="AdvanceEdge Contact Form"
          data-height={String(iframeHeight)}
          data-layout-iframe-id="inline-RxxqdyKUQfx1oWDQ6Sk1"
          data-form-id="RxxqdyKUQfx1oWDQ6Sk1"
          title="AdvanceEdge Contact Form"
          loading="lazy"
        />
      </div>
    </>
  );
}