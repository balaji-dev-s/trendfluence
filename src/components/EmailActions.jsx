export default function EmailActions() {
    return (
        <div className="email-wrapper position-relative d-inline-block">
            
            <div className="email-trigger d-flex align-items-center gap-2">
                <span className="email-text">
                    info@trendfluence.in
                </span>
                <span className="plus-icon">+</span>
            </div>

            <div className="email-toast d-flex flex-column">
                <button
                    className="toast-item"
                    onClick={() => navigator.clipboard.writeText("info@trendfluence.in")}
                >
                    <i className="bi bi-copy"></i>
                    <span>Copy Email</span>
                </button>

                <a href="mailto:info@trendfluence.in" className="toast-item">
                    <i className="bi bi-envelope"></i>
                    <span>Open Email Client</span>
                </a>

                <a href="tel:+911234567890" className="toast-item">
                    <i class="bi bi-calendar3"></i>
                    <span>Book Call</span>
                </a>
            </div>

        </div>
    );
}