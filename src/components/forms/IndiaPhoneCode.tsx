export function IndiaFlag() {
  return (
    <svg viewBox="0 0 21 15" width="22" height="16" aria-hidden="true">
      <rect width="21" height="5" fill="#FF9933" />
      <rect y="5" width="21" height="5" fill="#FFFFFF" />
      <rect y="10" width="21" height="5" fill="#138808" />
      <circle cx="10.5" cy="7.5" r="2.1" fill="none" stroke="#000080" strokeWidth="0.7" />
    </svg>
  );
}

export function IndiaPhoneCode({ boxed = false }: { boxed?: boolean }) {
  const control = (
    <>
      <span className="phone-flag" aria-hidden="true">
        <IndiaFlag />
      </span>
      <select name="phone-country" defaultValue="IN" aria-label="Telephone country code">
        <option value="IN">+91</option>
      </select>
    </>
  );

  if (boxed) {
    return <div className="phone-flag-box">{control}</div>;
  }

  return control;
}
