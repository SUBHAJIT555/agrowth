function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="15" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function ContactContent() {
  return (
    <>
      <div className="space16" />
      <div className="content-contact">
        <p>
          Ready to take your advertising campaigns to the next level? Whether you have
          questions, need expert advice, or are looking for the perfect ad account
          solution, we&rsquo;re here to help.
        </p>
        <p>
          Fill out the form and our team will get back to you quickly with tailored
          support and solutions.
        </p>
        <p>
          Need immediate assistance? Contact us directly through our 24/7 support
          channels. Let&rsquo;s connect today!
        </p>
      </div>
      <div className="contact-info-list">
        <div className="contact-info-item">
          <div className="info-item-icon" aria-hidden="true">
            <CalendarIcon />
          </div>
          <div className="info-item-content">
            <h4 className="info-item-title">Fill out the form</h4>
            <p className="info-item-subtitle">our team will get in touch within hours</p>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="info-item-icon" aria-hidden="true">
            <ChatIcon />
          </div>
          <div className="info-item-content">
            <h4 className="info-item-title">Need help now?</h4>
            <p className="info-item-subtitle">
              Chat with us through our 24/7 support channels
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
