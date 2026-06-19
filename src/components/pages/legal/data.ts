// Real copy extracted 1:1 from modash.io /legal/privacy-policy rendered DOM.
// Bold runs are marked with §§…§§ and rendered as <strong> by RichText.

export const EFFECTIVE_DATE = 'Effective date: April 2026';
export const PAGE_TITLE = 'Privacy Policy';

export const LEAD = `Modash OU (“§§Modash§§”, “§§we§§” or “§§us§§”) is an Estonian company offering SaaS services at its influencer/creator marketing web platform found at marketer.modash.io and creator.modash.io (the “§§Platform§§”). The Platform provides services for brands, agencies and creators.

Modash respects your privacy. This Privacy Policy (this “§§Policy§§”) describes how we process Personal Data (as defined below) we gather through in the course of operating the Platform (including if you are a content creator, if you subscribe to use our Platform, or if you sign up for a free trial), when you interact with Modash, and when you apply for a job at Modash. It also tells you about your rights and choices with respect to your Personal Data, and how you can contact us if you have any queries or concerns.`;

export type Section = { title: string; body: string };

// Section 2 ("How We Use Personal Data") renders the legal-ground table after its
// intro body — handled specially in the component.
export const SECTIONS: Section[] = [
  {
    title: '1. Personal Data We Collect',
    body: `In this Policy, “§§Personal Data§§” means any information relating to an identified or identifiable natural person. We may collect and process Personal Data about you in the ways outlined below. Where applicable, we indicate whether and why you must provide us with your Personal Data, as well as the consequences of failing to do so. If you do not provide Personal Data when requested, you may not be able to benefit from our Services if that information is necessary to provide you with them or if we are legally required to collect it.

Information provided by you

§§Information provided by Platform users when creating an account. §§If you use the Modash Platform to find, analyze and track content creators (“§§Creators§§”) for your campaigns, we will ask you to provide us with Personal Data including your name and contact details ( e.g., work email address), and the company you work for. We may also ask you to provide us with billing data, such as your bank account, payment card and billing address to facilitate your subscription plan. We will also ask you to create a username and password for access to the Platform.

§§Information provided by content creators who sign up to be paid via the Platform§§. If you are a Creator, or you are a representative of a Creator, and you are invited by a brand to be paid via the Platform, we will collect information including your name, handle, email, and payment information (e.g., your IBAN/BIC/SWIFT Code and VAT registration number).

§§Information provided when you sign up§§ for newsletters, webinars, events, or other marketing communications.

§§When you contact us.§§ If you contact us using a contact form, via email, or by other means, you may provide us with Personal Data, such as your name and contact details, the company you work for, and the content, date and time of our communications.

§§When you apply for a job.§§ If you apply for a job, you may provide us with Personal Data, such as your educational and professional history, certifications, interests and accomplishments, job and salary preferences, professional resumes and CVs, assessments, and references.

Information collected via automated means

§§Publicly available information. §§We collect and process information about Creators and their audience from publicly available resources. This includes Personal Data that the Creator or their audience has chosen to make publicly available on social media platforms, such as their name, contact details (e.g., email address), location, bio, interests, photos, videos and other content. Where customers use communication features, Modash may process contact details provided by customers or publicly available contact details of Creators. Modash does not use such contact details to enrich its core creator database.

§§Cookies and similar technologies.§§ We use cookies and similar technologies (collectively “§§cookies§§”) to ensure that our website and Platform function properly, to understand how you use those services, to improve our products and to assist with marketing campaigns. Cookies are small text files containing a string of alphanumeric characters.

§§Identification of business visitors (United States only).§§ For visitors located in the United States, we may use cookies and similar technologies together with data from trusted third-party partners to identify business visitors to our website. This may include associating your website visit with professional contact information, such as your name, company, or email address, obtained from external data sources. We may use this information to better understand our audience and to send relevant communications about our products and services. You can opt out of this type of identification and related communications at any time by visiting: https://app.retention.com/optout.

Information collected from other sources

§§Information from Google.§§ We may obtain Personal Data about you from Google if you choose to sign in using their services. The information we receive from Google may include your name, email address, language preference and profile picture.

§§Information from business intelligence platforms. §§We may obtain Personal Data about you, such as your email address, from business intelligence platforms, including ZoomInfo and Clearbit.`,
  },
  {
    title: '2. How We Use Personal Data',
    body: `We will only process your Personal Data based on a valid legal ground. The table below describes the legal ground by purpose.

In certain cases, Modash processes personal data on behalf of its customers (for example, in relation to campaign tracking or communication features). In such cases, the customer acts as the data controller and Modash acts as a processor, processing the data only on the customer’s instructions.`,
  },
  {
    title: '3. How We Share Your Personal Data',
    body: `We may share your Personal Data with third parties in the following circumstances:

§§Service providers, vendors and analytics partners.§§ We work with third party service providers to operate our Platform, including for IT infrastructure, web performance and security, communications, payments, project management, customer support and management, marketing, workflow management, recruitment and job applications, and other services. These third parties may have access to or process your Personal Data as part of providing those services to us, including providers of AI-based processing services used to analyze publicly available content.

§§Legal.§§ We may disclose your Personal Data to third parties if required to do so by law or in the good-faith belief that such action is necessary to comply with applicable laws, in response to a court order, judicial or other government subpoena or warrant, or to otherwise cooperate with law enforcement or other governmental agencies. We also reserve the right to disclose your Personal Data that we believe, in good faith, is appropriate or necessary to (i) take precautions against liability, (ii) protect ourselves or others from fraudulent, abusive, or unlawful uses or activity, (iii) investigate and defend ourselves against any third-party claims or allegations, (iv) protect the security or integrity of our Platform and any facilities or equipment used to make our Platform available, or (v) protect our property or other legal rights, including to enforce our agreements, or the rights, property, or safety of others.

§§Merger.§§ We may disclose or otherwise transfer Personal Data to an acquirer, investor, successor or assignee as part of any merger, acquisition, debt financing, sale of assets, financing or similar transaction, as well as in the event of an insolvency, bankruptcy, or receivership in which information is transferred to one or more third parties as one of our business assets.

§§Consent.§§ We may also disclose your Personal Data with your permission.`,
  },
  {
    title: '4. Data Retention',
    body: `We take measures to delete your Personal Data or keep it in a form that does not permit identifying you when this information is no longer necessary for the purposes for which we process it, unless we need to retain certain information as required by law, including to comply with tax requirements, or for as long as is reasonably necessary to meet regulatory requirements, resolve disputes, prevent fraud and abuse or enforce our terms and conditions. When determining the specific retention period, we take into account various criteria, such as the type of service provided to you, the nature and length of our relationship with you, and mandatory retention periods provided by law and the relevant statute of limitations. For instance:

§§Account data§§. We will retain your user account data as long as you are an active user, and for three years after that.

§§Invoicing data§§. We are legally obliged to keep invoicing data and the documentation on which it is based for seven years.

§§Backups§§. We keep backups for as long as you are an active user, and for three years after that.

§§Account Deletion§§. You may delete your account at any time through your account settings within the Platform. Upon account deletion: 1) Your account and associated Personal Data are deleted or irreversibly anonymized across our active systems, 2) Access tokens are revoked and active sessions are terminated, 3) Any active subscriptions are canceled.
Please note that certain information may be retained where necessary to comply with legal obligations (such as invoicing and tax records), to resolve disputes, or to enforce our agreements. Deleted accounts cannot be restored.

§§Fraud Prevention and Re-Registration Restrictions§§. To prevent fraud and abuse of our services, we may retain a minimal record of deleted accounts, such as a hashed version of an email address, for a limited period (up to 18 months) following account deletion. This information is used solely to prevent repeated sign-ups or misuse of our Platform and is processed based on our legitimate interest in maintaining the security and integrity of our services.`,
  },
  {
    title: '5. Your Rights in Relation to Your Personal Data',
    body: `Depending on where you reside, you may also have the following legal rights:

§§Access and Portability§§. You may ask us to provide you with a copy of the Personal Data we maintain about you, including a machine-readable copy of the Personal Data that you have provided to us, and request information about its processing.

§§Rectification and Deletion§§. You may ask us to update and correct inaccuracies in your Personal Data, or to have the information anonymised or deleted, as appropriate.

§§Restriction and Objection§§. You may ask us to restrict the processing of your Personal Data, or object to such processing.

§§Consent Withdrawal§§. You may withdraw any consent you previously provided to us regarding the processing of your Personal Data, at any time and free of charge. We will apply your preferences going forward and this will not affect the lawfulness of the processing before you withdrew your consent. For marketing and event communications, you can also unsubscribe using the link in our emails, or by contacting us at privacy@modash.io. Unsubscribing will not affect service-related or administrative communications.

§§Complaint§§. You may lodge a complaint with your local data protection authority, the details of which you can find here: https://www.edpb.europa.eu/about-edpb/about-edpb/members_en. If you are in the UK, you can contact the Information Commissioner’s Office, who you can contact using the details found at www.ico.org.uk. We would, however, appreciate the chance to deal with your concerns before you approach a data protection authority, so please contact us in the first instance.

You may exercise these rights by contacting us using the contact details at the end of this Policy. Please note that there are exceptions and limitations to each of these rights.`,
  },
  {
    title: '6. Third Parties',
    body: `Our Platform may contain links to other websites, products, or services that we do not own or operate. We are not responsible for the privacy practices of these third parties. Please be aware that this Policy does not apply to your activities on these third-party services or any information you disclose to these third parties. We encourage you to read their privacy policies before providing any information to them.`,
  },
  {
    title: '7. Security',
    body: `We make reasonable efforts to protect your Personal Data from loss, misuse, unauthorized access, disclosure, alteration, and destruction. We implement appropriate technical and organizational measures designed to safeguard Personal Data based on the nature of the data and the risks involved.

§§Information Security Certification.§§ We maintain an Information Security Management System (ISMS) that has been independently assessed and certified in accordance with the §§ISO/IEC 27001:2022§§ international standard. This certification covers the systems, technical infrastructure, applications, and processes used to deliver our services and to hold, obtain, share, or otherwise manage customer and business data, and reflects our ongoing commitment to maintaining robust information security practices.

Despite these measures, no method of transmission over the Internet or method of electronic storage is completely secure. Accordingly, we cannot guarantee absolute security of your Personal Data.`,
  },
  {
    title: '8. Children’s Privacy',
    body: `We do not knowingly collect, maintain, or use Personal Data from children under 13 years of age, and no part of our Platform is directed to children. If you learn that a child has provided us with Personal Data in violation of this Policy, then you may alert us by contacting us using the contact details at the end of this Policy.`,
  },
  {
    title: '9. Cross-Border Data Transfers',
    body: `We may use outsourced services in countries outside Europe from time to time in order to support our business. If we need to transfer your Personal Data to a country outside of Europe where the level of protection of Personal Data may be different than in your country, we will comply with applicable data protection laws. In particular we will rely on (i) an EU Commission, UK or Swiss government adequacy decision, (ii) contractual protections such as Standard Contractual Clauses, and where required, supplementary technical and organizational safeguards, or (iii) another valid data transfer mechanism. If you are located in Europe, you may contact us as specified below for more information about the safeguards we use to transfer Personal Data outside of Europe.`,
  },
  {
    title: '10. Changes to this Policy',
    body: `We may update this Policy from time to time to reflect changes in our privacy practices. If we modify this Policy, we will indicate the date of the latest revision at the top of this Policy.`,
  },
  {
    title: '11. Our contact information',
    body: `Should you have any queries regarding this Policy, about Modash's processing of your Personal Data or if you wish to exercise your rights with respect to your Personal Data, you can contact Modash by email: privacy@modash.io or by writing to us at: Telliskivi 60a, B-building, 10412 Tallinn, Estonia.`,
  },
];

export type TableRow = { purpose: string; description: string; legal: string };

export const USE_TABLE: TableRow[] = [
  {
    purpose: 'Providing the Platform',
    description:
      'We use Personal Data about users of the Platform to operate, maintain, and provide our Platform. For example, we use your Personal Data to create your account, set your preferred language and allow you to login.',
    legal:
      'We have a legitimate interest in using your Personal Data for the purpose of developing, hosting, and maintaining the Platform.',
  },
  {
    purpose: 'Providing insights about Creators through our Platform',
    description:
      'We use Personal Data about Creators and their audiences to provide insights to customers through our Platform. For example, we may use Personal Data of Creators and their audiences to make inferences and derive insights (such as engagement metrics, audience quality indicators, authenticity signals and content classifications) and allow customers to identify appropriate Creators for their campaigns based on categorization.\n\nWe may also use automated and AI-based tools to analyze publicly available content (including images, videos, captions and other media) in order to improve the accuracy and relevance of search results, recommendations, and creator discovery features. This processing is limited to content analysis and does not involve biometric identification or automated decision-making that produces legal or similarly significant effects on individuals. We do not use personal data processed through these tools to train our own models, and we do not permit our service providers to use such data to train or improve their models.',
    legal:
      'We have a legitimate interest in using your Personal Data for the purpose of providing insights to customers, and this interest is not overridden by the interests of Creators.\n\nOur customers have a legitimate interest in the processing of Personal Data to identify Creators that are suitable for their marketing campaigns.',
  },
  {
    purpose: 'Support',
    description:
      'We use Personal Data to provide technical support, including diagnosing and resolving any issues you report.',
    legal:
      'We have a legitimate interest in using your Personal Data for the purpose of providing technical support.',
  },
  {
    purpose: 'Fraud prevention',
    description:
      'We use your Personal Data to keep our Services secure and to identify and prevent fraud in the use of our Platform.',
    legal:
      'We need it to comply with a legal obligation, for instance to comply with a court order.\n\nWe have a legitimate interest in using your Personal Data for the purpose of preventing fraud.',
  },
  {
    purpose: 'Customer relationship management',
    description:
      'We may process your Personal Data for customer relationship management purposes.',
    legal:
      'We have a legitimate interest in using your Personal Data for the purpose of managing customer relationships',
  },
  {
    purpose: 'Communicating with you',
    description:
      'We may use your email address and other Personal Data as necessary to contact you for administrative purposes such as to provide information that you request, to respond to comments and questions, or to ask you to provide feedback and complete surveys.\n\nWhere communication features are used within the Platform (for example, to contact Creators), we may process communication data such as email content, communication history, and related metadata. This may include information about whether emails are opened or whether links are clicked, in order to provide and improve communication functionality.',
    legal:
      'We have a legitimate interest in using your Personal Data for the purpose of communicating with you.',
  },
  {
    purpose: 'Analytics and product development',
    description:
      'We use Personal Data about you to analyze usage trends and preferences to improve our Platform, as well as to develop new products, services, features, and functionalities.',
    legal:
      'We have a legitimate interest in using your Personal Data for the purpose of evaluating and improving our products or Services.',
  },
  {
    purpose: 'Marketing and event communications',
    description:
      'We may use your Personal Data to send marketing and event-related communications, including: product updates, newsletters, invitations to webinars, events, and other educational content, that may be relevant, valuable or otherwise of interest to you.',
    legal:
      'We rely on your consent where required by applicable law (e.g., for email marketing under GDPR or ePrivacy rules). You give us consent to do so.\n\nWhere permitted, we may also rely on our legitimate interest in promoting our services, provided this does not override your rights or freedoms.',
  },
  {
    purpose: 'Administrative and legal purposes',
    description:
      'We may use your Personal Data to enforce this Policy, our Terms of Service, to defend our legal rights and to comply with our legal obligations and internal policies.',
    legal:
      'The processing is necessary for entering into, or performance of a contract to which you are a party.\n\nWe need it to comply with a legal obligation, for instance to comply with a court order.\n\nWe have a legitimate interest in using your Personal Data for the purpose of addressing administrative and legal issues.',
  },
  {
    purpose: 'Recruitment',
    description:
      'We use Personal Data about you when you apply for a job at Modash, such as your educational and professional history, certifications, interests and accomplishments, job and salary preferences, professional resumes and CVs, assessments, and references.',
    legal:
      'We have a legitimate interest in using your Personal Data for the purpose of assessing your suitability for employment.',
  },
  {
    purpose: 'Aggregation',
    description:
      'We may aggregate or otherwise de-identify Personal Data and use the resulting information for other business purposes, as permitted by applicable law.',
    legal:
      'We have a legitimate interest in using your Personal Data for the purpose of aggregating and de-identifying the data.',
  },
];
