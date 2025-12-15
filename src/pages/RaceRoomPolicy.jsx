import './RaceRoomPolicy.css'

function RaceRoomPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <header className="policy-header">
          <h1 className="policy-title">🏎️ Race Room Privacy Policy</h1>
          <p className="policy-effective">Effective Date: 31-03-2025</p>
        </header>

        <div className="policy-intro">
          <p>
            Welcome to Race Room! Your privacy is important to us. This Privacy Policy explains 
            how we collect, use, and protect your information when you use our app.
          </p>
        </div>

        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <p>
            Race Room does not collect personally identifiable information. However, we may collect 
            certain non-personal data through third-party services for functionality and analytics purposes.
          </p>

          <h3>Automatically Collected Information</h3>
          <p>When using our app, third-party services may automatically collect:</p>
          <ul>
            <li>Device information (e.g., device type, operating system, unique device identifiers)</li>
            <li>App usage data (e.g., time spent in the app, features used)</li>
            <li>Advertising identifiers for personalized ads (e.g., Google Advertising ID)</li>
          </ul>

          <h3>Third-Party Data Collection</h3>
          <p>Our app integrates with third-party APIs and services that may collect and process user data:</p>
          <ul>
            <li><strong>Google Mobile Ads (AdMob)</strong> - Displays advertisements</li>
            <li><strong>Jolpica API</strong> - Provides Formula 1 race data</li>
            <li><strong>OpenWeather API</strong> - Provides weather conditions for race circuits</li>
            <li><strong>GeoNames API</strong> - Provides circuit timezone information</li>
            <li><strong>Motorsport.com RSS Feed</strong> - Provides Formula 1 news</li>
          </ul>
          <p className="note">
            We do not control these third-party services and recommend reviewing their privacy policies.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use collected information for the following purposes:</p>
          <ul>
            <li>To display Formula 1 results, standings, and weather information for race circuits</li>
            <li>To improve the app's performance and user experience</li>
            <li>To serve relevant advertisements through Google AdMob</li>
            <li>To analyze app usage through third-party analytics services</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Advertising and Tracking</h2>
          <p>
            Race Room displays advertisements using Google Mobile Ads (AdMob). AdMob may use cookies, 
            tracking technologies, and unique advertising identifiers to provide personalized or 
            non-personalized ads based on your device activity and preferences.
          </p>

          <h3>How Ads Work in Race Room</h3>
          <ul>
            <li>
              <strong>Personalized Ads:</strong> AdMob may track your activity to show ads relevant 
              to your interests.
            </li>
            <li>
              <strong>Non-Personalized Ads:</strong> Ads are based on general app usage and are not 
              tailored to your interests.
            </li>
            <li>
              Google may use cookies and other technologies to collect ad-related data. For details, 
              check{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google's Privacy Policy
              </a>.
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Data Retention and Security</h2>
          <p>
            We do not store personal data on our servers. Any collected data is managed by third-party 
            services according to their security standards. We take reasonable steps to protect 
            non-personal data from unauthorized access.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. User Rights (GDPR & CCPA Compliance)</h2>
          
          <h3>European Union (GDPR)</h3>
          <p>If you are in the European Union (EU), you have rights under the General Data Protection Regulation (GDPR), including:</p>
          <ul>
            <li>The right to access, update, or delete your data</li>
            <li>The right to restrict data processing</li>
            <li>The right to object to automated decision-making</li>
          </ul>

          <h3>California, USA (CCPA)</h3>
          <p>If you are in California, USA, you have rights under the California Consumer Privacy Act (CCPA), including:</p>
          <ul>
            <li>The right to know what personal data is collected</li>
            <li>The right to opt out of data selling (we do not sell data)</li>
            <li>The right to request deletion of collected data</li>
          </ul>

          <p>
            To exercise these rights, contact us at{' '}
            <a href="mailto:alex.depas18@gmail.com">alex.depas18@gmail.com</a>.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Children's Privacy</h2>
          <p>
            Race Room is not intended for children under the age of 13. We do not knowingly collect 
            or process personal data from children. If we become aware of any such data, we will 
            take steps to delete it.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted within 
            the app. Continued use of the app after updates signifies acceptance of the revised policy.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <p className="contact-email">
            📧 Email: <a href="mailto:alex.depas18@gmail.com">alex.depas18@gmail.com</a>
          </p>
        </section>

        <footer className="policy-footer">
          <p className="agreement">By using Race Room, you agree to this Privacy Policy.</p>
          <p className="last-updated">Last Updated: 31-03-2025</p>
        </footer>
      </div>
    </div>
  )
}

export default RaceRoomPolicy

