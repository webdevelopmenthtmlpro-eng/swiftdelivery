// Ensure translations object exists
window.translations = window.translations || {};

// Utilities
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Translations object - should be present or loaded before applyTranslations uses it
window.translations = window.translations || {};

const commonKeys = {
  home: 'Home',
  gallery: 'Gallery',
  services: 'Services',
  track: 'Track',
  login: 'Login',
  register: 'Register',
  welcome: 'SwiftDelivery - Airfreight Logistics',
  intro: 'Global cargo solutions with speed, safety, and precision.',
  getStarted: 'Get Started',
  galleryTitle: 'Fleet & Facilities',
  servicesTitle: 'Our Services',
  service1: 'Airfreight Express',
  service1Desc: 'Priority cargo delivery with guaranteed timelines, ensuring your urgent shipments reach their destination quickly and safely.',
  service2: 'Global Warehousing',
  service2Desc: 'Secure storage solutions across strategically located international hubs, enabling efficient inventory management and quick distribution.',
  service3: 'Customs Clearance',
  service3Desc: 'Expert handling of documentation and border processing to expedite shipment clearance, minimizing delays and compliance risks.',
  service4: 'Temperature-Controlled Cargo',
  service4Desc: 'Specialized transport and storage for pharmaceuticals, perishables, and sensitive goods requiring strict temperature regulation.',
  service5: 'Dangerous Goods Transport',
  service5Desc: 'Certified and compliant handling of hazardous materials with stringent safety standards and legal requirements.',
  bookingTitle: 'Booking Dashboard',
  bookingNamePlaceholder: 'Full Name',
  bookingEmailPlaceholder: 'Email Address',
  bookingMessagePlaceholder: 'Booking Details (date, cargo type, destination)',
  bookingSubmitButton: 'Submit Booking',
  testimonialsTitle: 'Customer Testimonials',
  testimonial1Text: 'SwiftDelivery got our medical supplies across borders in record time. Highly recommended!',
  testimonial1Author: '- Dr. Amina Yusuf',
  testimonial2Text: 'Their tracking system is top-notch. I knew exactly where my shipment was at all times.',
  testimonial2Author: '- James Okoro',
  testimonial3Text: 'Professional, fast, and reliable. SwiftDelivery is our go-to logistics partner.',
  testimonial3Author: '- GlobalTech Ltd.',
  contactTitle: 'Contact Us',
  submitButton: 'Submit Form',
  loginTitle: 'Client Login',
  loginButton: 'Login',
  registerTitle: 'New Client Registration',
  registerButton: 'Register',
  registerUsernamePlaceholder: 'Username',
  registerPasswordPlaceholder: 'Password',
  trackTitle: 'Pickup & Delivery Tracking',
  trackButton: 'Track Shipment',
  faqTitle: 'Frequently Asked Questions',
  faq1Q: 'How fast is airfreight delivery?',
  faq1A: 'Most airfreight shipments arrive within 24-48 hours, depending on the destination, flight availability, and customs processing. We prioritize speed and reliability, ensuring your cargo reaches its destination as quickly as possible. Expedited options are available for urgent shipments.',
  faq2Q: 'Do you handle international customs?',
  faq2A: 'Yes, we provide comprehensive customs clearance services for all international shipments. Our experienced team navigates complex regulations and documentation to ensure smooth border transitions, minimizing delays and avoiding compliance issues.',
  faq3Q: 'Can I track my cargo in real time?',
  faq3A: 'Absolutely. Our advanced tracking system offers live updates, GPS location data, and status notifications throughout the journey. You\'ll have full visibility from pickup to final delivery, accessible via our online portal or mobile app.',
  faq4Q: 'Do you offer temperature-controlled shipping?',
  faq4A: 'Yes, we specialize in cold-chain logistics tailored for sensitive goods such as pharmaceuticals, vaccines, fresh produce, and other perishables. Our temperature-controlled containers and monitoring systems maintain optimal conditions throughout transit.',
  faq5Q: 'Is weekend delivery available?',
  faq5A: 'Weekend delivery is available in select regions and for eligible service tiers. To confirm availability for your shipment, please contact our support team. We strive to accommodate your schedule with flexible delivery options.',
  liveChatTitle: 'Live Chat Support',
  liveChatNamePlaceholder: 'Your Name',
  liveChatEmailPlaceholder: 'Your Email',
  liveChatMessagePlaceholder: 'Your Message',
  chatbotTitle: 'SwiftDelivery Bot',
  chatbotGreeting: 'Hi there! How can I help you today?',
  chatMessagePlaceholder: 'Type your message...',
  sendButton: 'Send',
  newsletterTitle: 'Stay Updated',
  newsletterText: 'Subscribe to our newsletter for airfreight tips, updates, and exclusive offers.',
  emailLabel: 'Email',
  subscribeButton: 'Subscribe',
  followUs: 'Follow Us',
  company: 'Company',
  about: 'About Us',
  helpCenter: 'Help Center',
  support: 'Support',
  legal: 'Legal',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  footerNote: '© 2025 SwiftDelivery. All rights reserved.'
};

// English base
window.translations.en = window.translations.en || {};
Object.assign(window.translations.en, commonKeys);

// French
window.translations.fr = window.translations.fr || {};
Object.assign(window.translations.fr, {
  home: 'Accueil',
  gallery: 'Galerie',
  services: 'Services',
  track: 'Suivi',
  login: 'Connexion',
  register: 'S\'inscrire',
  welcome: 'SwiftDelivery - Fret aérien',
  intro: 'Solutions de fret mondiales rapides, sûres et précises.',
  getStarted: 'Commencer',
  galleryTitle: 'Flotte & Installations',
  servicesTitle: 'Nos Services',
  service1: 'Express aérien',
  service1Desc: 'Livraison prioritaire de marchandises avec délais garantis, pour que vos envois urgents arrivent rapidement et en toute sécurité.',
  service2: 'Entrepôts mondiaux',
  service2Desc: 'Solutions de stockage sécurisées dans des hubs internationaux stratégiques, permettant une gestion efficace des stocks et une distribution rapide.',
  service3: 'Dédouanement',
  service3Desc: 'Gestion experte des documents et du traitement frontalier pour accélérer le dédouanement des envois, minimisant les retards et les risques de non-conformité.',
  service4: 'Transport sous température contrôlée',
  service4Desc: 'Transport et stockage spécialisés pour produits pharmaceutiques, périssables et marchandises sensibles nécessitant une régulation stricte de la température.',
  service5: 'Transport de matières dangereuses',
  service5Desc: 'Manutention certifiée et conforme des matières dangereuses avec des normes de sécurité strictes et le respect des exigences légales.',
  bookingTitle: 'Tableau de réservation',
  bookingNamePlaceholder: 'Nom complet',
  bookingEmailPlaceholder: 'Adresse e-mail',
  bookingMessagePlaceholder: 'Détails de la réservation (date, type de cargaison, destination)',
  bookingSubmitButton: 'Envoyer la réservation',
  testimonialsTitle: 'Témoignages clients',
  testimonial1Text: 'SwiftDelivery a acheminé nos fournitures médicales travers les frontières en un temps record. Fortement recommandé !',
  testimonial1Author: '- Dr. Amina Yusuf',
  testimonial2Text: 'Leur système de suivi est au top. Je savais exactement où se trouvait mon envoi à tout moment.',
  testimonial2Author: '- James Okoro',
  testimonial3Text: 'Professionnel, rapide et fiable. SwiftDelivery est notre partenaire logistique de référence.',
  testimonial3Author: '- GlobalTech Ltd.',
  contactTitle: 'Contactez-nous',
  submitButton: 'Envoyer',
  loginTitle: 'Connexion client',
  loginButton: 'Se connecter',
  registerTitle: 'Nouvel enregistrement client',
  registerButton: 'S\'inscrire',
  registerUsernamePlaceholder: 'Nom d\'utilisateur',
  registerPasswordPlaceholder: 'Mot de passe',
  trackTitle: 'Suivi de collecte et de livraison',
  trackButton: 'Suivre l\'envoi',
  faqTitle: 'Foire aux questions',
  faq1Q: 'À quelle vitesse la livraison aérienne est-elle effectuée ?',
  faq1A: 'La plupart des expéditions aériennes arrivent en 24-48 heures, selon la destination, la disponibilité des vols et le traitement douanier. Nous privilégions la rapidité et la fiabilité.',
  faq2Q: 'Gérez-vous les douanes internationales ?',
  faq2A: 'Oui, nous fournissons des services complets de dédouanement pour toutes les expéditions internationales.',
  faq3Q: 'Puis-je suivre ma cargaison en temps réel ?',
  faq3A: 'Absolument. Notre système de suivi fournit des mises à jour en direct, des données GPS et des notifications de statut tout au long du trajet.',
  faq4Q: 'Offrez-vous un transport sous température contrôlée ?',
  faq4A: 'Oui, nous sommes spécialisés dans la chaîne du froid pour les produits sensibles.',
  faq5Q: 'La livraison le week-end est-elle disponible ?',
  faq5A: 'La livraison le week-end est disponible dans certaines régions et pour certains niveaux de service.',
  liveChatTitle: 'Assistance en direct',
  liveChatNamePlaceholder: 'Votre nom',
  liveChatEmailPlaceholder: 'Votre e-mail',
  liveChatMessagePlaceholder: 'Votre message',
  chatbotTitle: 'Bot SwiftDelivery',
  chatbotGreeting: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
  chatMessagePlaceholder: 'Tapez votre message...',
  sendButton: 'Envoyer',
  newsletterTitle: 'Restez informé',
  newsletterText: 'Abonnez-vous à notre newsletter pour des conseils et des offres exclusives.',
  emailLabel: 'E-mail',
  subscribeButton: 'S\'abonner',
  followUs: 'Suivez-nous',
  company: 'Entreprise',
  about: 'À propos',
  helpCenter: 'Centre d\'aide',
  support: 'Support',
  legal: 'Mentions légales',
  privacy: 'Politique de confidentialité',
  terms: 'Conditions d\'utilisation',
  footerNote: '© 2025 SwiftDelivery. Tous droits réservés.'
});

// Spanish
window.translations.es = window.translations.es || {};
Object.assign(window.translations.es, {
  home: 'Inicio',
  gallery: 'Galería',
  services: 'Servicios',
  track: 'Seguimiento',
  login: 'Iniciar sesión',
  register: 'Registrarse',
  welcome: 'SwiftDelivery - Transporte Aéreo',
  intro: 'Soluciones de carga globales con rapidez, seguridad y precisión.',
  getStarted: 'Comenzar',
  galleryTitle: 'Flota y Instalaciones',
  servicesTitle: 'Nuestros Servicios',
  service1: 'Transporte aéreo exprés',
  service1Desc: 'Entrega prioritaria de carga con plazos garantizados para que sus envíos urgentes lleguen de forma rápida y segura.',
  service2: 'Almacenamiento global',
  service2Desc: 'Soluciones de almacenamiento seguras en hubs internacionales estratégicos que permiten una gestión eficiente del inventario y una distribución rápida.',
  service3: 'Despacho de aduanas',
  service3Desc: 'Gestión experta de documentación y procesos fronterizos para agilizar el despacho de aduanas, minimizando retrasos y riesgos de incumplimiento.',
  service4: 'Carga con control de temperatura',
  service4Desc: 'Transporte y almacenamiento especializados para productos farmacéuticos, perecederos y mercancías sensibles que requieren control de temperatura.',
  service5: 'Transporte de mercancías peligrosas',
  service5Desc: 'Manipulación certificada y conforme de materiales peligrosos con normas de seguridad estrictas y requisitos legales.',
  bookingTitle: 'Panel de reservas',
  bookingNamePlaceholder: 'Nombre completo',
  bookingEmailPlaceholder: 'Dirección de correo',
  bookingMessagePlaceholder: 'Detalles de la reserva (fecha, tipo de carga, destino)',
  bookingSubmitButton: 'Enviar reserva',
  testimonialsTitle: 'Testimonios de clientes',
  testimonial1Text: 'SwiftDelivery transportó nuestros suministros médicos a través de fronteras en tiempo récord. ¡Muy recomendable!',
  testimonial1Author: '- Dr. Amina Yusuf',
  testimonial2Text: 'Su sistema de seguimiento es excepcional. Sabía exactamente dónde estaba mi envío en todo momento.',
  testimonial2Author: '- James Okoro',
  testimonial3Text: 'Profesional, rápido y fiable. SwiftDelivery es nuestro socio logístico preferido.',
  testimonial3Author: '- GlobalTech Ltd.',
  contactTitle: 'Contáctenos',
  submitButton: 'Enviar',
  loginTitle: 'Inicio de sesión',
  loginButton: 'Entrar',
  registerTitle: 'Registro de nuevo cliente',
  registerButton: 'Registrarse',
  registerUsernamePlaceholder: 'Nombre de usuario',
  registerPasswordPlaceholder: 'Contraseña',
  trackTitle: 'Seguimiento de recogida y entrega',
  trackButton: 'Rastrear envío',
  faqTitle: 'Preguntas frecuentes',
  faq1Q: '¿Qué tan rápida es la entrega aérea?',
  faq1A: 'La mayoría de los envíos aéreos llegan en 24-48 horas, dependiendo del destino, la disponibilidad de vuelos y el procesamiento aduanero.',
  faq2Q: '¿Manejan aduanas internacionales?',
  faq2A: 'Sí, ofrecemos servicios integrales de despacho aduanero para todos los envíos internacionales.',
  faq3Q: '¿Puedo rastrear mi carga en tiempo real?',
  faq3A: 'Sí. Nuestro sistema ofrece actualizaciones en vivo, datos GPS y notificaciones de estado durante todo el trayecto.',
  faq4Q: '¿Ofrecen envío con control de temperatura?',
  faq4A: 'Sí, nos especializamos en la cadena del frío para mercancías sensibles.',
  faq5Q: '¿Está disponible la entrega los fines de semana?',
  faq5A: 'La entrega los fines de semana está disponible en algunas regiones y para ciertos niveles de servicio.',
  liveChatTitle: 'Chat en vivo',
  liveChatNamePlaceholder: 'Tu nombre',
  liveChatEmailPlaceholder: 'Tu correo',
  liveChatMessagePlaceholder: 'Tu mensaje',
  chatbotTitle: 'Bot SwiftDelivery',
  chatbotGreeting: '¡Hola! ¿En qué puedo ayudarte hoy?',
  chatMessagePlaceholder: 'Escribe tu mensaje...',
  sendButton: 'Enviar',
  newsletterTitle: 'Mantente al día',
  newsletterText: 'Suscríbete a nuestro boletín para recibir consejos y ofertas.',
  emailLabel: 'Correo electrónico',
  subscribeButton: 'Suscribirse',
  followUs: 'Síguenos',
  company: 'Empresa',
  about: 'Sobre nosotros',
  helpCenter: 'Centro de ayuda',
  support: 'Soporte',
  legal: 'Legal',
  privacy: 'Política de privacidad',
  terms: 'Términos de servicio',
  footerNote: '© 2025 SwiftDelivery. Todos los derechos reservados.'
});

// German
window.translations.de = window.translations.de || {};
Object.assign(window.translations.de, {
  home: 'Startseite',
  gallery: 'Galerie',
  services: 'Dienstleistungen',
  track: 'Verfolgung',
  login: 'Anmelden',
  register: 'Registrieren',
  welcome: 'SwiftDelivery - Luftfracht',
  intro: 'Globale Frachtlösungen mit Geschwindigkeit, Sicherheit und Präzision.',
  getStarted: 'Loslegen',
  galleryTitle: 'Flotte & Einrichtungen',
  servicesTitle: 'Unsere Dienstleistungen',
  service1: 'Express Luftfracht',
  service1Desc: 'Priorisierte Frachtsendung mit garantierten Zeitplänen, damit Ihre dringenden Sendungen schnell und sicher ankommen.',
  service2: 'Globales Lagerwesen',
  service2Desc: 'Sichere Lagerlösungen an strategisch gelegenen internationalen Hubs für effizientes Inventarmanagement und schnelle Distribution.',
  service3: 'Zollabfertigung',
  service3Desc: 'Expertenabwicklung von Unterlagen und Grenzprozessen zur Beschleunigung der Sendungsfreigabe und Minimierung von Verzögerungen.',
  service4: 'Temperaturgeführte Fracht',
  service4Desc: 'Spezialisierter Transport und Lagerung für Pharmazeutika, verderbliche Waren und empfindliche Güter mit strenger Temperaturkontrolle.',
  service5: 'Transport gefährlicher Güter',
  service5Desc: 'Zertifizierte und konforme Handhabung gefährlicher Stoffe mit strengen Sicherheitsstandards.',
  bookingTitle: 'Buchungsübersicht',
  bookingNamePlaceholder: 'Vollständiger Name',
  bookingEmailPlaceholder: 'E-Mail-Adresse',
  bookingMessagePlaceholder: 'Buchungsdetails (Datum, Frachtart, Ziel)',
  bookingSubmitButton: 'Buchung absenden',
  testimonialsTitle: 'Kundenbewertungen',
  testimonial1Text: 'SwiftDelivery hat unsere medizinischen Lieferungen rekordverdächtig über Grenzen transportiert. Sehr zu empfehlen!',
  testimonial1Author: '- Dr. Amina Yusuf',
  testimonial2Text: 'Ihr Tracking-System ist erstklassig. Ich wusste jederzeit, wo sich meine Sendung befand.',
  testimonial2Author: '- James Okoro',
  testimonial3Text: 'Professionell, schnell und zuverlässig. SwiftDelivery ist unser Logistikpartner der Wahl.',
  testimonial3Author: '- GlobalTech Ltd.',
  contactTitle: 'Kontaktieren Sie uns',
  submitButton: 'Absenden',
  loginTitle: 'Kundenlogin',
  loginButton: 'Anmelden',
  registerTitle: 'Neue Kundenregistrierung',
  registerButton: 'Registrieren',
  registerUsernamePlaceholder: 'Benutzername',
  registerPasswordPlaceholder: 'Passwort',
  trackTitle: 'Abhol- & Lieferverfolgung',
  trackButton: 'Sendung verfolgen',
  faqTitle: 'Häufig gestellte Fragen',
  faq1Q: 'Wie schnell ist die Luftfrachtlieferung?',
  faq1A: 'Die meisten Luftfrachtsendungen erreichen das Ziel innerhalb von 24-48 Stunden, abhängig von Zielort, Flugverfügbarkeit und Zollabfertigung.',
  faq2Q: 'Kümmern Sie sich um internationale Zollabfertigung?',
  faq2A: 'Ja, wir bieten umfassende Zollabfertigungsdienste für alle internationalen Sendungen.',
  faq3Q: 'Kann ich meine Fracht in Echtzeit verfolgen?',
  faq3A: 'Ja. Unser System bietet Live-Updates, GPS-Daten und Statusbenachrichtigungen während der gesamten Reise.',
  faq4Q: 'Bieten Sie temperaturkontrollierten Versand an?',
  faq4A: 'Ja, wir sind auf die Kühlkette für empfindliche Waren spezialisiert.',
  faq5Q: 'Ist Wochenendzustellung verfügbar?',
  faq5A: 'Wochenendzustellung ist in ausgewählten Regionen und für bestimmte Servicelevel verfügbar.',
  liveChatTitle: 'Live-Chat-Support',
  liveChatNamePlaceholder: 'Ihr Name',
  liveChatEmailPlaceholder: 'Ihre E-Mail',
  liveChatMessagePlaceholder: 'Ihre Nachricht',
  chatbotTitle: 'SwiftDelivery Bot',
  chatbotGreeting: 'Hallo! Wie kann ich Ihnen heute helfen?',
  chatMessagePlaceholder: 'Geben Sie Ihre Nachricht ein...',
  sendButton: 'Senden',
  newsletterTitle: 'Bleiben Sie auf dem Laufenden',
  newsletterText: 'Abonnieren Sie unseren Newsletter für Tipps und exklusive Angebote.',
  emailLabel: 'E-Mail',
  subscribeButton: 'Abonnieren',
  followUs: 'Folgen Sie uns',
  company: 'Unternehmen',
  about: 'Über uns',
  helpCenter: 'Hilfezentrum',
  support: 'Support',
  legal: 'Rechtliches',
  privacy: 'Datenschutz',
  terms: 'Nutzungsbedingungen',
  footerNote: '© 2025 SwiftDelivery. Alle Rechte vorbehalten.'
});

// Chinese Simplified
window.translations.zh = window.translations.zh || {};
Object.assign(window.translations.zh, {
  home: '首页',
  gallery: '图库',
  services: '服务',
  track: '跟踪',
  login: '登录',
  register: '注册',
  welcome: 'SwiftDelivery - 空运物流',
  intro: '全球货物解决方案，速度、安全、精确。',
  getStarted: '开始',
  galleryTitle: '车队与设施',
  servicesTitle: '我们的服务',
  service1: '空运快递',
  service1Desc: '优先货物交付，保证时间，确保您的紧急货物快速安全到达目的地。',
  service2: '全球仓储',
  service2Desc: '战略性国际枢纽的安全存储解决方案，实现高效库存管理和快速分发。',
  service3: '海关清关',
  service3Desc: '专家处理文件和边境处理，以加速货物清关，最小化延误和合规风险。',
  service4: '温控货物',
  service4Desc: '专为制药、易腐和敏感货物设计的运输和存储，严格温度控制。',
  service5: '危险品运输',
  service5Desc: '认证和合规处理危险材料，严格安全标准和法律要求。',
  bookingTitle: '预订仪表板',
  bookingNamePlaceholder: '全名',
  bookingEmailPlaceholder: '电子邮件地址',
  bookingMessagePlaceholder: '预订详情（日期、货物类型、目的地）',
  bookingSubmitButton: '提交预订',
  testimonialsTitle: '客户评价',
  testimonial1Text: 'SwiftDelivery 在创纪录的时间内将我们的医疗用品运过边境。强烈推荐！',
  testimonial1Author: '- Dr. Amina Yusuf',
  testimonial2Text: '他们的跟踪系统一流。我随时知道我的货物在哪里。',
  testimonial2Author: '- James Okoro',
  testimonial3Text: '专业、快速、可靠。SwiftDelivery 是我们的首选物流伙伴。',
  testimonial3Author: '- GlobalTech Ltd.',
  contactTitle: '联系我们',
  submitButton: '提交',
  loginTitle: '客户登录',
  loginButton: '登录',
  registerTitle: '新客户注册',
  registerButton: '注册',
  registerUsernamePlaceholder: '用户名',
  registerPasswordPlaceholder: '密码',
  trackTitle: '取件与交付跟踪',
  trackButton: '跟踪货物',
  faqTitle: '常见问题',
  faq1Q: '空运交付有多快？',
  faq1A: '大多数空运货物在24-48小时内到达，取决于目的地、航班可用性和海关处理。',
  faq2Q: '你们处理国际海关吗？',
  faq2A: '是的，我们为所有国际货物提供全面海关清关服务。',
  faq3Q: '我可以实时跟踪我的货物吗？',
  faq3A: '当然。我们的高级跟踪系统提供实时更新、GPS位置数据和状态通知。',
  faq4Q: '你们提供温控运输吗？',
  faq4A: '是的，我们专注于敏感货物的冷链物流。',
  faq5Q: '周末交付可用吗？',
  faq5A: '周末交付在选定地区和服务级别可用。',
  liveChatTitle: '实时聊天支持',
  liveChatNamePlaceholder: '您的姓名',
  liveChatEmailPlaceholder: '您的电子邮件',
  liveChatMessagePlaceholder: '您的消息',
  chatbotTitle: 'SwiftDelivery 机器人',
  chatbotGreeting: '你好！今天我能帮你什么？',
  chatMessagePlaceholder: '输入您的消息...',
  sendButton: '发送',
  newsletterTitle: '保持更新',
  newsletterText: '订阅我们的新闻通讯，获取空运提示、更新和独家优惠。',
  emailLabel: '电子邮件',
  subscribeButton: '订阅',
  followUs: '关注我们',
  company: '公司',
  about: '关于我们',
  helpCenter: '帮助中心',
  support: '支持',
  legal: '法律',
  privacy: '隐私政策',
  terms: '服务条款',
  footerNote: '© 2025 SwiftDelivery。保留所有权利。'
});

// Arabic (right-to-left)
window.translations.ar = window.translations.ar || {};
Object.assign(window.translations.ar, {
  home: 'الرئيسية',
  gallery: 'معرض',
  services: 'الخدمات',
  track: 'تتبع',
  login: 'تسجيل الدخول',
  register: 'التسجيل',
  welcome: 'SwiftDelivery - الشحن الجوي',
  intro: 'حلول شحن عالمية بالسرعة والأمان والدقة.',
  getStarted: 'ابدأ',
  galleryTitle: 'الأسطول والمرافق',
  servicesTitle: 'خدماتنا',
  service1: 'الشحن الجوي السريع',
  service1Desc: 'تسليم الأولوية للبضائع مع ضمان الجدول الزمني، مما يضمن وصول شحناتك العاجلة بسرعة وأمان.',
  service2: 'المستودعات العالمية',
  service2Desc: 'حلول تخزين آمنة في مراكز دولية استراتيجية، مما يتيح إدارة المخزون الفعالة وتوزيع سريع.',
  service3: 'تخليص الجمارك',
  service3Desc: 'معالجة خبيرة للوثائق والمعالجة الحدودية لتسريع تخليص الشحنة، تقليل التأخيرات ومخاطر الامتثال.',
  service4: 'البضائع ذات التحكم في درجة الحرارة',
  service4Desc: 'نقل وتخزين متخصص للأدوية والمنتجات السارية والسلع الحساسة التي تتطلب تنظيمًا صارمًا لدرجة الحرارة.',
  service5: 'نقل البضائع الخطرة',
  service5Desc: 'معالجة معتمدة ومتوافقة للمواد الخطرة بمعايير أمان صارمة ومتطلبات قانونية.',
  bookingTitle: 'لوحة الإحجاز',
  bookingNamePlaceholder: 'الاسم الكامل',
  bookingEmailPlaceholder: 'عنوان البريد الإلكتروني',
  bookingMessagePlaceholder: 'تفاصيل الإحجاز (التاريخ، نوع البضائع، الوجهة)',
  bookingSubmitButton: 'إرسال الإحجاز',
  testimonialsTitle: 'آراء العملاء',
  testimonial1Text: 'SwiftDelivery نقلت مستلزماتنا الطبية عبر الحدود في وقت قياسي. موصى به بشدة!',
  testimonial1Author: '- د. أمينة يوسف',
  testimonial2Text: 'نظام التتبع الخاص بهم ممتاز. كنت أعرف بالضبط مكان شحنتي في جميع الأوقات.',
  testimonial2Author: '- جيمس أوكورو',
  testimonial3Text: 'مهني، سريع وموثوق. SwiftDelivery هو شريك اللوجستيات المفضل لدينا.',
  testimonial3Author: '- GlobalTech Ltd.',
  contactTitle: 'اتصل بنا',
  submitButton: 'إرسال',
  loginTitle: 'دخول العميل',
  loginButton: 'دخول',
  registerTitle: 'تسجيل عميل جديد',
  registerButton: 'تسجيل',
  registerUsernamePlaceholder: 'اسم المستخدم',
  registerPasswordPlaceholder: 'كلمة المرور',
  trackTitle: 'تتبع الاستلام والتسليم',
  trackButton: 'تتبع الشحنة',
  faqTitle: 'الأسئلة الشائعة',
  faq1Q: 'كم هو سريع التسليم الجوي؟',
  faq1A: 'معظم الشحنات الجوية تصل في غضون 24-48 ساعة، اعتمادًا على الوجهة وتوافر الرحلات ومعالجة الجمارك.',
  faq2Q: 'هل تتعاملون مع الجمارك الدولية؟',
  faq2A: 'نعم، نقدم خدمات تخليص جمركي شاملة لجميع الشحنات الدولية.',
  faq3Q: 'هل يمكنني تتبع بضائعي في الوقت الفعلي؟',
  faq3A: 'بالتأكيد. نظام التتبع المتقدم لدينا يقدم تحديثات حية، بيانات موقع GPS، وإشعارات حالة طوال الرحلة.',
  faq4Q: 'هل تقدمون شحنًا بتحكم في درجة الحرارة؟',
  faq4A: 'نعم، نحن متخصصون في لوجستيات سلسلة التبريد للسلع الحساسة.',
  faq5Q: 'هل التسليم في نهاية الأسبوع متاح؟',
  faq5A: 'التسليم في نهاية الأسبوع متاح في مناطق مختارة ومستويات الخدمة المؤهلة.',
  liveChatTitle: 'دعم الدردشة الحية',
  liveChatNamePlaceholder: 'اسمك',
  liveChatEmailPlaceholder: 'بريدك الإلكتروني',
  liveChatMessagePlaceholder: 'رسالتك',
  chatbotTitle: 'روبوت SwiftDelivery',
  chatbotGreeting: 'مرحبا! كيف يمكنني مساعدتك اليوم؟',
  chatMessagePlaceholder: 'اكتب رسالتك...',
  sendButton: 'إرسال',
  newsletterTitle: 'ابق على اطلاع',
  newsletterText: 'اشترك في نشرتنا الإخبارية للحصول على نصائح الشحن الجوي، التحديثات، والعروض الحصرية.',
  emailLabel: 'البريد الإلكتروني',
  subscribeButton: 'اشتراك',
  followUs: 'تابعنا',
  company: 'الشركة',
  about: 'معلومات عنا',
  helpCenter: 'مركز المساعدة',
  support: 'الدعم',
  legal: 'القانوني',
  privacy: 'سياسة الخصوصية',
  terms: 'شروط الخدمة',
  footerNote: '© 2025 SwiftDelivery. جميع الحقوق محفوظة.'
});

// Portuguese
window.translations.pt = window.translations.pt || {};
Object.assign(window.translations.pt, Object.assign({}, commonKeys, {
  home: 'Início',
  gallery: 'Galeria',
  services: 'Serviços',
  track: 'Rastrear',
  login: 'Entrar',
  register: 'Registrar',
  welcome: 'SwiftDelivery - Frete Aéreo',
  intro: 'Soluções de carga global com velocidade, segurança e precisão.',
  getStarted: 'Começar',
  galleryTitle: 'Frota e Instalações',
  servicesTitle: 'Nossos Serviços',
  service1: 'Express de Frete Aéreo',
  service1Desc: 'Entrega de carga prioritária com prazos garantidos.',
  service2: 'Armazenamento Global',
  service2Desc: 'Soluções de armazenamento seguro em hubs internacionais.',
  service3: 'Despacho Aduaneiro',
  service3Desc: 'Processamento especializado de alfândega.',
  service4: 'Carga com Controle de Temperatura',
  service4Desc: 'Transporte especializado para produtos sensíveis.',
  service5: 'Transporte de Mercadorias Perigosas',
  service5Desc: 'Manipulação certificada de materiais perigosos.',
  bookingTitle: 'Painel de Reservas',
  bookingNamePlaceholder: 'Nome Completo',
  bookingEmailPlaceholder: 'Endereço de Email',
  bookingMessagePlaceholder: 'Detalhes da Reserva',
  bookingSubmitButton: 'Enviar Reserva',
  testimonialsTitle: 'Testemunhos de Clientes',
  testimonial1Text: 'SwiftDelivery transportou nossas suprimentos rapidamente. Altamente recomendado!',
  testimonial1Author: '- Dra. Amina Yusuf',
  testimonial2Text: 'Sistema de rastreamento de primeira classe.',
  testimonial2Author: '- James Okoro',
  testimonial3Text: 'Profissional, rápido e confiável.',
  testimonial3Author: '- GlobalTech Ltd.',
  contactTitle: 'Entre em Contato',
  loginTitle: 'Entrada de Cliente',
  loginButton: 'Entrar',
  registerTitle: 'Novo Registro de Cliente',
  registerButton: 'Registrar',
  registerUsernamePlaceholder: 'Nome de Usuário',
  registerPasswordPlaceholder: 'Senha',
  trackTitle: 'Rastreamento de Coleta e Entrega',
  trackButton: 'Rastrear Envio',
  faqTitle: 'Perguntas Frequentes',
  faq1Q: 'Qual é a velocidade da entrega aérea?',
  faq1A: 'A maioria dos envios aéreos chega em 24-48 horas.',
  faq2Q: 'Vocês lidam com alfândegas internacionais?',
  faq2A: 'Sim, oferecemos serviços completos de despacho aduaneiro.',
  faq3Q: 'Posso rastrear minha carga em tempo real?',
  faq3A: 'Sim. Nosso sistema oferece atualizações ao vivo.',
  faq4Q: 'Vocês oferecem envio com controle de temperatura?',
  faq4A: 'Sim, somos especializados em logística de cadeia fria.',
  faq5Q: 'A entrega de fim de semana está disponível?',
  faq5A: 'Sim, em regiões selecionadas.',
  liveChatTitle: 'Suporte de Chat ao Vivo',
  liveChatNamePlaceholder: 'Seu Nome',
  liveChatEmailPlaceholder: 'Seu Email',
  liveChatMessagePlaceholder: 'Sua Mensagem',
  chatbotTitle: 'Bot SwiftDelivery',
  chatbotGreeting: 'Olá! Como posso ajudá-lo?',
  chatMessagePlaceholder: 'Digite sua mensagem...',
  newsletterTitle: 'Fique Atualizado',
  newsletterText: 'Inscreva-se em nosso boletim informativo.',
  subscribeButton: 'Inscrever-se',
  followUs: 'Nos Siga',
  company: 'Empresa',
  about: 'Sobre Nós',
  helpCenter: 'Centro de Ajuda',
  privacy: 'Política de Privacidade',
  terms: 'Termos de Serviço',
  footerNote: '© 2025 SwiftDelivery. Todos os direitos reservados.'
}));

// Russian
window.translations.ru = window.translations.ru || {};
Object.assign(window.translations.ru, Object.assign({}, commonKeys, {
  home: 'Главная',
  gallery: 'Галерея',
  services: 'Услуги',
  track: 'Отслеживание',
  login: 'Вход',
  register: 'Регистрация',
  welcome: 'SwiftDelivery - Авиафрахт',
  intro: 'Глобальные грузовые решения с скоростью, безопасностью и точностью.',
  getStarted: 'Начать',
  galleryTitle: 'Флот и объекты',
  servicesTitle: 'Наши услуги',
  service1: 'Авиафрахт Экспресс',
  service1Desc: 'Приоритетная доставка груза с гарантированными сроками.',
  service2: 'Глобальные склады',
  service2Desc: 'Безопасные решения хранения в международных центрах.',
  service3: 'Таможенное оформление',
  service3Desc: 'Специализированная обработка таможни.',
  service4: 'Груз с контролем температуры',
  service4Desc: 'Специализированный транспорт для чувствительных товаров.',
  service5: 'Транспортировка опасных грузов',
  service5Desc: 'Сертифицированная обработка опасных материалов.',
  bookingTitle: 'Панель бронирования',
  bookingNamePlaceholder: 'Полное имя',
  bookingEmailPlaceholder: 'Адрес электронной почты',
  bookingMessagePlaceholder: 'Сведения о бронировании',
  bookingSubmitButton: 'Отправить бронирование',
  testimonialsTitle: 'Отзывы клиентов',
  testimonial1Text: 'SwiftDelivery быстро доставила наши медикаменты. Хорошо рекомендуется!',
  testimonial1Author: '- Dr. Amina Yusuf',
  testimonial2Text: 'Система отслеживания первоклассная.',
  testimonial2Author: '- James Okoro',
  testimonial3Text: 'Профессиональная, быстрая и надежная.',
  testimonial3Author: '- GlobalTech Ltd.',
  contactTitle: 'Свяжитесь с нами',
  loginTitle: 'Вход клиента',
  loginButton: 'Вход',
  registerTitle: 'Новая регистрация клиента',
  registerButton: 'Регистрация',
  registerUsernamePlaceholder: 'Имя пользователя',
  registerPasswordPlaceholder: 'Пароль',
  trackTitle: 'Отслеживание доставки',
  trackButton: 'Отследить отправку',
  faqTitle: 'Часто задаваемые вопросы',
  faq1Q: 'Как быстро авиадоставка?',
  faq1A: 'Большинство авиагрузов прибывают за 24-48 часов.',
  faq2Q: 'Вы занимаетесь международной таможней?',
  faq2A: 'Да, мы предоставляем полные таможенные услуги.',
  faq3Q: 'Могу ли я отследить груз в реальном времени?',
  faq3A: 'Да. Наша система предоставляет живые обновления.',
  faq4Q: 'Предоставляете ли вы доставку с контролем температуры?',
  faq4A: 'Да, мы специализируемся на холодной цепи.',
  faq5Q: 'Доступна ли доставка на выходных?',
  faq5A: 'Да, в избранных регионах.',
  liveChatTitle: 'Поддержка в прямом чате',
  liveChatNamePlaceholder: 'Ваше имя',
  liveChatEmailPlaceholder: 'Ваш адрес электронной почты',
  liveChatMessagePlaceholder: 'Ваше сообщение',
  chatbotTitle: 'Бот SwiftDelivery',
  chatbotGreeting: 'Привет! Как я могу вам помочь?',
  chatMessagePlaceholder: 'Введите ваше сообщение...',
  newsletterTitle: 'Оставайтесь в курсе',
  newsletterText: 'Подпишитесь на нашу рассылку.',
  subscribeButton: 'Подписаться',
  followUs: 'Следите за нами',
  company: 'Компания',
  about: 'О нас',
  helpCenter: 'Центр помощи',
  privacy: 'Политика конфиденциальности',
  terms: 'Условия обслуживания',
  footerNote: '© 2025 SwiftDelivery. Все права защищены.'
}));

// Japanese
window.translations.ja = window.translations.ja || {};
Object.assign(window.translations.ja, Object.assign({}, commonKeys, {
  home: 'ホーム', gallery: 'ギャラリー', services: 'サービス', track: '追跡', login: 'ログイン', register: '登録',
  welcome: 'SwiftDelivery - 航空貨物', intro: 'スピード、安全性、精度を備えたグローバル貨物ソリューション。',
  getStarted: '始める', galleryTitle: 'フリートと施設', servicesTitle: 'サービス',
  service1: 'エアフレイト エクスプレス', service1Desc: '保証されたスケジュールでの優先貨物配送。',
  service2: 'グローバル ウェアハウジング', service2Desc: '戦略的に位置する国際ハブでの安全な保管ソリューション。',
  service3: '税関クリアランス', service3Desc: '専門的な税関処理。',
  service4: '温度制御貨物', service4Desc: '敏感な商品のための専門的な輸送と保管。',
  service5: '危険品輸送', service5Desc: '危険物の認定および準拠した取扱。',
  bookingTitle: '予約ダッシュボード', bookingNamePlaceholder: 'フルネーム', bookingEmailPlaceholder: 'メール',
  bookingMessagePlaceholder: '予約詳細', bookingSubmitButton: '予約を送信', testimonialsTitle: '顧客の声',
  testimonial1Text: 'SwiftDeliveryは医療用品を迅速に国境を越えて送付しました。強くお勧めします！',
  testimonial1Author: '- Dr. Amina Yusuf', testimonial2Text: 'トラッキングシステムは一流です。',
  testimonial2Author: '- James Okoro', testimonial3Text: 'プロフェッショナル、迅速、信頼できる。',
  testimonial3Author: '- GlobalTech Ltd.', contactTitle: 'お問い合わせ', submitButton: '送信',
  loginTitle: 'クライアント ログイン', loginButton: 'ログイン', registerTitle: '新規クライアント登録',
  registerButton: '登録', registerUsernamePlaceholder: 'ユーザー名', registerPasswordPlaceholder: 'パスワード',
  trackTitle: 'ピックアップ＆配送追跡', trackButton: '配送を追跡', faqTitle: 'よくある質問',
  faq1Q: '航空貨物配送はどのくらい速いですか？', faq1A: 'ほとんどの航空貨物は24-48時間で到着します。',
  faq2Q: '国際税関を取り扱いますか？', faq2A: 'はい、すべての国際配送に対応します。',
  faq3Q: '貨物をリアルタイムで追跡できますか？', faq3A: 'はい。当社のシステムはライブアップデートを提供します。',
  faq4Q: '温度制御された配送をご提供していますか？', faq4A: 'はい、敏感な商品のコールドチェーン物流に特化しています。',
  faq5Q: '週末配送は利用可能ですか？', faq5A: 'はい、選定地域で利用可能です。',
  liveChatTitle: 'ライブ チャット サポート', liveChatNamePlaceholder: 'あなたの名前',
  liveChatEmailPlaceholder: 'あなたのメール', liveChatMessagePlaceholder: 'あなたのメッセージ',
  chatbotTitle: 'SwiftDelivery ボット', chatbotGreeting: 'こんにちは！今日はどのようにお手伝いできますか？',
  chatMessagePlaceholder: 'メッセージを入力してください...', sendButton: '送信',
  newsletterTitle: '最新情報を入手', newsletterText: 'ニュースレターを購読してください。',
  emailLabel: 'メール', subscribeButton: '購読', followUs: 'フォロー', company: '会社', about: '私たちについて',
  helpCenter: 'ヘルプセンター', support: 'サポート', legal: '法的', privacy: 'プライバシーポリシー',
  terms: '利用規約', footerNote: '© 2025 SwiftDelivery. すべての権利を保有しています。'
}));

// Italian
window.translations.it = window.translations.it || {};
Object.assign(window.translations.it, Object.assign({}, commonKeys, {
  home: 'Home', gallery: 'Galleria', services: 'Servizi', track: 'Traccia', login: 'Accedi', register: 'Registrati',
  welcome: 'SwiftDelivery - Logistica Aerea', intro: 'Soluzioni di carico globali con velocità, sicurezza e precisione.',
  getStarted: 'Inizia', galleryTitle: 'Flotta e Strutture', servicesTitle: 'I Nostri Servizi',
  service1: 'Aereo Express', service1Desc: 'Consegna di carico prioritario con tempi garantiti.',
  service2: 'Magazzinaggio Globale', service2Desc: 'Soluzioni di stoccaggio sicuro in hub internazionali strategici.',
  service3: 'Sdoganamento', service3Desc: 'Elaborazione specializzata della dogana.',
  service4: 'Carico Controllato in Temperatura', service4Desc: 'Trasporto e stoccaggio specializzati per merci sensibili.',
  service5: 'Trasporto di Merci Pericolose', service5Desc: 'Movimentazione certificata e conforme di materiali pericolosi.',
  bookingTitle: 'Pannello di Prenotazione', bookingNamePlaceholder: 'Nome Completo', bookingEmailPlaceholder: 'Email',
  bookingMessagePlaceholder: 'Dettagli Prenotazione', bookingSubmitButton: 'Invia Prenotazione',
  testimonialsTitle: 'Testimonianze dei Clienti',
  testimonial1Text: 'SwiftDelivery ha spedito i nostri forniture mediche rapidamente. Altamente consigliato!',
  testimonial1Author: '- Dr. Amina Yusuf', testimonial2Text: 'Il loro sistema di tracciamento è di prim\'ordine.',
  testimonial2Author: '- James Okoro', testimonial3Text: 'Professionale, veloce e affidabile.',
  testimonial3Author: '- GlobalTech Ltd.', contactTitle: 'Contattaci', submitButton: 'Invia',
  loginTitle: 'Accesso Cliente', loginButton: 'Accedi', registerTitle: 'Registrazione Nuovo Cliente',
  registerButton: 'Registrati', registerUsernamePlaceholder: 'Nome Utente', registerPasswordPlaceholder: 'Password',
  trackTitle: 'Tracciamento Ritiro e Consegna', trackButton: 'Traccia Spedizione', faqTitle: 'Domande Frequenti',
  faq1Q: 'Quanto è veloce la consegna aerea?', faq1A: 'La maggior parte dei carichi aerei arriva in 24-48 ore.',
  faq2Q: 'Gestite la dogana internazionale?', faq2A: 'Sì, forniamo servizi completi di sdoganamento.',
  faq3Q: 'Posso tracciare il mio carico in tempo reale?', faq3A: 'Sì. Il nostro sistema fornisce aggiornamenti dal vivo.',
  faq4Q: 'Offrite spedizioni controllate in temperatura?', faq4A: 'Sì, siamo specializzati in logistica della catena del freddo.',
  faq5Q: 'È disponibile la consegna nel fine settimana?', faq5A: 'Sì, in regioni selezionate.',
  liveChatTitle: 'Supporto Chat dal Vivo', liveChatNamePlaceholder: 'Il Tuo Nome',
  liveChatEmailPlaceholder: 'La Tua Email', liveChatMessagePlaceholder: 'Il Tuo Messaggio',
  chatbotTitle: 'Bot SwiftDelivery', chatbotGreeting: 'Ciao! Come posso aiutarti oggi?',
  chatMessagePlaceholder: 'Scrivi il tuo messaggio...', sendButton: 'Invia',
  newsletterTitle: 'Resta Aggiornato', newsletterText: 'Iscriviti alla nostra newsletter.',
  emailLabel: 'Email', subscribeButton: 'Iscriviti', followUs: 'Seguici', company: 'Azienda', about: 'Chi Siamo',
  helpCenter: 'Centro Assistenza', support: 'Supporto', legal: 'Legale', privacy: 'Politica sulla Privacy',
  terms: 'Condizioni di Servizio', footerNote: '© 2025 SwiftDelivery. Tutti i diritti riservati.'
}));

// Korean
window.translations.ko = window.translations.ko || {};
Object.assign(window.translations.ko, Object.assign({}, commonKeys, {
  home: '홈', gallery: '갤러리', services: '서비스', track: '추적', login: '로그인', register: '등록',
  welcome: 'SwiftDelivery - 항공화물 물류', intro: '속도, 안전, 정밀도를 갖춘 글로벌 화물 솔루션.',
  getStarted: '시작하기', galleryTitle: '운송 및 시설', servicesTitle: '서비스',
  service1: '항공화물 익스프레스', service1Desc: '보장된 일정의 우선 화물 배송.',
  service2: '글로벌 창고', service2Desc: '전략적으로 위치한 국제 허브의 안전한 보관 솔루션.',
  service3: '통관 절차', service3Desc: '전문적인 통관 처리.',
  service4: '온도 제어 화물', service4Desc: '민감한 상품을 위한 전문 운송 및 보관.',
  service5: '위험물 운송', service5Desc: '위험 물질의 인증된 및 준수 취급.',
  bookingTitle: '예약 대시보드', bookingNamePlaceholder: '전체 이름', bookingEmailPlaceholder: '이메일',
  bookingMessagePlaceholder: '예약 세부정보', bookingSubmitButton: '예약 제출',
  testimonialsTitle: '고객 후기',
  testimonial1Text: 'SwiftDelivery가 의료용품을 신속하게 국경 너머로 배송했습니다. 강력히 권장합니다!',
  testimonial1Author: '- Dr. Amina Yusuf', testimonial2Text: '그들의 추적 시스템은 최고급입니다.',
  testimonial2Author: '- James Okoro', testimonial3Text: '전문적이고 빠르고 신뢰할 수 있습니다.',
  testimonial3Author: '- GlobalTech Ltd.', contactTitle: '문의', submitButton: '제출',
  loginTitle: '클라이언트 로그인', loginButton: '로그인', registerTitle: '새 클라이언트 등록',
  registerButton: '등록', registerUsernamePlaceholder: '사용자 이름', registerPasswordPlaceholder: '비밀번호',
  trackTitle: '픽업 및 배송 추적', trackButton: '배송 추적', faqTitle: '자주 묻는 질문',
  faq1Q: '항공 배송은 얼마나 빠릅니까?', faq1A: '대부분의 항공 화물은 24-48시간 내에 도착합니다.',
  faq2Q: '국제 통관을 처리합니까?', faq2A: '예, 모든 국제 배송에 대해 완벽한 통관 서비스를 제공합니다.',
  faq3Q: '실시간으로 화물을 추적할 수 있습니까?', faq3A: '예. 당사 시스템은 실시간 업데이트를 제공합니다.',
  faq4Q: '온도 제어 배송을 제공합니까?', faq4A: '예, 민감한 상품의 콜드체인 물류를 전문으로 합니다.',
  faq5Q: '주말 배송이 가능합니까?', faq5A: '예, 선정된 지역에서 가능합니다.',
  liveChatTitle: '라이브 채팅 지원', liveChatNamePlaceholder: '당신의 이름',
  liveChatEmailPlaceholder: '당신의 이메일', liveChatMessagePlaceholder: '당신의 메시지',
  chatbotTitle: 'SwiftDelivery 봇', chatbotGreeting: '안녕하세요! 오늘 어떻게 도와드릴까요?',
  chatMessagePlaceholder: '메시지를 입력하세요...', sendButton: '보내기',
  newsletterTitle: '최신 정보 받기', newsletterText: '뉴스레터를 구독하세요.',
  emailLabel: '이메일', subscribeButton: '구독', followUs: '팔로우', company: '회사', about: '우리 소개',
  helpCenter: '지원 센터', support: '지원', legal: '법률', privacy: '개인정보 보호정책',
  terms: '서비스 약관', footerNote: '© 2025 SwiftDelivery. 모든 권리 보유.'
}));

// Vietnamese
window.translations.vi = window.translations.vi || {};
Object.assign(window.translations.vi, Object.assign({}, commonKeys, {
  home: 'Trang chủ', gallery: 'Thư viện', services: 'Dịch vụ', track: 'Theo dõi', login: 'Đăng nhập', register: 'Đăng ký',
  welcome: 'SwiftDelivery - Logistics Hàng không', intro: 'Giải pháp hàng hóa toàn cầu với tốc độ, an toàn và độ chính xác.',
  getStarted: 'Bắt đầu', galleryTitle: 'Đội tàu và Cơ sở', servicesTitle: 'Dịch vụ của chúng tôi',
  service1: 'Hàng không Express', service1Desc: 'Giao hàng ưu tiên với thời gian được đảm bảo.',
  service2: 'Kho hàng Toàn cầu', service2Desc: 'Giải pháp lưu trữ an toàn tại các trung tâm quốc tế chiến lược.',
  service3: 'Thông quan hải quan', service3Desc: 'Xử lý hải quan chuyên nghiệp.',
  service4: 'Hàng hóa kiểm soát nhiệt độ', service4Desc: 'Vận chuyển và lưu trữ chuyên biệt cho hàng hóa nhạy cảm.',
  service5: 'Vận chuyển hàng hóa nguy hiểm', service5Desc: 'Xử lý chứng thực và tuân thủ các vật liệu nguy hiểm.',
  bookingTitle: 'Bảng điều khiển Đặt lịch', bookingNamePlaceholder: 'Họ và tên', bookingEmailPlaceholder: 'Email',
  bookingMessagePlaceholder: 'Chi tiết đặt lịch', bookingSubmitButton: 'Gửi đặt lịch',
  testimonialsTitle: 'Đánh giá của khách hàng',
  testimonial1Text: 'SwiftDelivery đã gửi vật tư y tế của chúng tôi qua biên giới một cách nhanh chóng. Đánh giá cao!',
  testimonial1Author: '- Dr. Amina Yusuf', testimonial2Text: 'Hệ thống theo dõi của họ tuyệt vời.',
  testimonial2Author: '- James Okoro', testimonial3Text: 'Chuyên nghiệp, nhanh và đáng tin cậy.',
  testimonial3Author: '- GlobalTech Ltd.', contactTitle: 'Liên hệ', submitButton: 'Gửi',
  loginTitle: 'Đăng nhập khách hàng', loginButton: 'Đăng nhập', registerTitle: 'Đăng ký khách hàng mới',
  registerButton: 'Đăng ký', registerUsernamePlaceholder: 'Tên người dùng', registerPasswordPlaceholder: 'Mật khẩu',
  trackTitle: 'Theo dõi Lấy hàng & Giao hàng', trackButton: 'Theo dõi Lô hàng', faqTitle: 'Câu hỏi thường gặp',
  faq1Q: 'Giao hàng hàng không nhanh như thế nào?', faq1A: 'Hầu hết hàng hóa hàng không đến trong vòng 24-48 giờ.',
  faq2Q: 'Bạn xử lý hải quan quốc tế?', faq2A: 'Có, chúng tôi cung cấp dịch vụ thông quan hải quan toàn diện.',
  faq3Q: 'Tôi có thể theo dõi hàng hóa của mình trong thời gian thực không?', faq3A: 'Có. Hệ thống của chúng tôi cung cấp cập nhật trực tiếp.',
  faq4Q: 'Bạn có cung cấp vận chuyển kiểm soát nhiệt độ không?', faq4A: 'Có, chúng tôi chuyên về logistics chuỗi lạnh.',
  faq5Q: 'Giao hàng cuối tuần có sẵn không?', faq5A: 'Có, ở các khu vực được chọn.',
  liveChatTitle: 'Hỗ trợ Trò chuyện Trực tiếp', liveChatNamePlaceholder: 'Tên của bạn',
  liveChatEmailPlaceholder: 'Email của bạn', liveChatMessagePlaceholder: 'Tin nhắn của bạn',
  chatbotTitle: 'Bot SwiftDelivery', chatbotGreeting: 'Xin chào! Tôi có thể giúp gì cho bạn hôm nay?',
  chatMessagePlaceholder: 'Gõ tin nhắn của bạn...', sendButton: 'Gửi',
  newsletterTitle: 'Cập nhật thông tin', newsletterText: 'Đăng ký nhận bản tin của chúng tôi.',
  emailLabel: 'Email', subscribeButton: 'Đăng ký', followUs: 'Theo dõi chúng tôi', company: 'Công ty', about: 'Về chúng tôi',
  helpCenter: 'Trung tâm Trợ giúp', support: 'Hỗ trợ', legal: 'Pháp lý', privacy: 'Chính sách Bảo mật',
  terms: 'Điều khoản Dịch vụ', footerNote: '© 2025 SwiftDelivery. Tất cả quyền được bảo lưu.'
}));

// Indonesian
window.translations.id = window.translations.id || {};
Object.assign(window.translations.id, Object.assign({}, commonKeys, {
  home: 'Beranda', gallery: 'Galeri', services: 'Layanan', track: 'Pelacakan', login: 'Masuk', register: 'Daftar',
  welcome: 'SwiftDelivery - Logistik Pengiriman Udara', intro: 'Solusi kargo global dengan kecepatan, keamanan, dan presisi.',
  getStarted: 'Mulai', galleryTitle: 'Armada & Fasilitas', servicesTitle: 'Layanan Kami',
  service1: 'Pengiriman Udara Ekspres', service1Desc: 'Pengiriman kargo prioritas dengan jadwal terjamin.',
  service2: 'Pergudangan Global', service2Desc: 'Solusi penyimpanan aman di pusat internasional yang strategis.',
  service3: 'Bea Cukai', service3Desc: 'Pemrosesan bea cukai profesional.',
  service4: 'Kargo Terkontrol Suhu', service4Desc: 'Pengangkutan dan penyimpanan khusus untuk barang sensitif.',
  service5: 'Pengangkutan Barang Berbahaya', service5Desc: 'Penanganan bersertifikat dan patuh untuk bahan berbahaya.',
  bookingTitle: 'Dasbor Pemesanan', bookingNamePlaceholder: 'Nama Lengkap', bookingEmailPlaceholder: 'Email',
  bookingMessagePlaceholder: 'Detail Pemesanan', bookingSubmitButton: 'Kirim Pemesanan',
  testimonialsTitle: 'Testimoni Pelanggan',
  testimonial1Text: 'SwiftDelivery mengirimkan persediaan medis kami lintas batas dengan cepat. Sangat direkomendasikan!',
  testimonial1Author: '- Dr. Amina Yusuf', testimonial2Text: 'Sistem pelacakan mereka sangat bagus.',
  testimonial2Author: '- James Okoro', testimonial3Text: 'Profesional, cepat, dan dapat diandalkan.',
  testimonial3Author: '- GlobalTech Ltd.', contactTitle: 'Hubungi Kami', submitButton: 'Kirim',
  loginTitle: 'Masuk Klien', loginButton: 'Masuk', registerTitle: 'Pendaftaran Klien Baru',
  registerButton: 'Daftar', registerUsernamePlaceholder: 'Nama Pengguna', registerPasswordPlaceholder: 'Kata Sandi',
  trackTitle: 'Pelacakan Pengambilan & Pengiriman', trackButton: 'Lacak Pengiriman', faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq1Q: 'Seberapa cepat pengiriman udara?', faq1A: 'Sebagian besar kargo udara tiba dalam 24-48 jam.',
  faq2Q: 'Apakah Anda menangani bea cukai internasional?', faq2A: 'Ya, kami menyediakan layanan bea cukai yang komprehensif.',
  faq3Q: 'Bisakah saya melacak kargo saya secara real-time?', faq3A: 'Ya. Sistem kami memberikan pembaruan langsung.',
  faq4Q: 'Apakah Anda menawarkan pengiriman dengan kontrol suhu?', faq4A: 'Ya, kami mengkhususkan diri dalam logistik rantai dingin.',
  faq5Q: 'Apakah pengiriman akhir pekan tersedia?', faq5A: 'Ya, di wilayah tertentu.',
  liveChatTitle: 'Dukungan Obrolan Langsung', liveChatNamePlaceholder: 'Nama Anda',
  liveChatEmailPlaceholder: 'Email Anda', liveChatMessagePlaceholder: 'Pesan Anda',
  chatbotTitle: 'Bot SwiftDelivery', chatbotGreeting: 'Halo! Bagaimana saya bisa membantu Anda hari ini?',
  chatMessagePlaceholder: 'Ketik pesan Anda...', sendButton: 'Kirim',
  newsletterTitle: 'Tetap Diperbarui', newsletterText: 'Berlangganan buletin kami.',
  emailLabel: 'Email', subscribeButton: 'Berlangganan', followUs: 'Ikuti Kami', company: 'Perusahaan', about: 'Tentang Kami',
  helpCenter: 'Pusat Bantuan', support: 'Dukungan', legal: 'Hukum', privacy: 'Kebijakan Privasi',
  terms: 'Ketentuan Layanan', footerNote: '© 2025 SwiftDelivery. Semua hak dilindungi.'
}));

// Thai
window.translations.th = window.translations.th || {};
Object.assign(window.translations.th, Object.assign({}, commonKeys, {
  home: 'หน้าแรก', gallery: 'แกลเลอรี่', services: 'บริการ', track: 'ติดตาม', login: 'เข้าสู่ระบบ', register: 'สมัครสมาชิก',
  welcome: 'SwiftDelivery - การขนส่งทางอากาศ', intro: 'โซลูชันสินค้าทั่วโลกที่มีความเร็ว ความปลอดภัย และความแม่นยำ',
  getStarted: 'เริ่มต้น', galleryTitle: 'กองทุนและสิ่งอำนวยความสะดวก', servicesTitle: 'บริการของเรา',
  service1: 'การขนส่งทางอากาศด่วน', service1Desc: 'การส่งมอบสินค้าที่มีความสำคัญพร้อมกำหนดเวลาที่มั่นใจ',
  service2: 'คลังสินค้าทั่วโลก', service2Desc: 'โซลูชันการเก็บรักษาที่ปลอดภัยที่ศูนย์กลางสากลที่มีตำแหน่งกลยุทธ์',
  service3: 'การปลดปล่อยศุลกากร', service3Desc: 'การประมวลผลศุลกากรที่มีความเชี่ยวชาญ',
  service4: 'สินค้าควบคุมอุณหภูมิ', service4Desc: 'การขนส่งและการเก็บรักษาแบบพิเศษสำหรับสินค้าที่ละเอียดอ่อน',
  service5: 'การขนส่งสินค้าอันตราย', service5Desc: 'การจัดการวัสดุอันตรายที่ได้รับการรับรองและปฏิบัติตามมาตรฐาน',
  bookingTitle: 'แดชบอร์ดการจอง', bookingNamePlaceholder: 'ชื่อเต็ม', bookingEmailPlaceholder: 'อีเมล',
  bookingMessagePlaceholder: 'รายละเอียดการจอง', bookingSubmitButton: 'ส่งการจอง',
  testimonialsTitle: 'ความเห็นของลูกค้า',
  testimonial1Text: 'SwiftDelivery ส่งอุปกรณ์ทางการแพทย์ของเราข้ามพรมแดนอย่างรวดเร็ว แนะนำอย่างแน่นอน!',
  testimonial1Author: '- Dr. Amina Yusuf', testimonial2Text: 'ระบบติดตามของพวกเขายอดเยี่ยม',
  testimonial2Author: '- James Okoro', testimonial3Text: 'มืออาชีพ รวดเร็ว และเชื่อถือได้',
  testimonial3Author: '- GlobalTech Ltd.', contactTitle: 'ติดต่อเรา', submitButton: 'ส่ง',
  loginTitle: 'เข้าสู่ระบบไคลเอนต์', loginButton: 'เข้าสู่ระบบ', registerTitle: 'การลงทะเบียนไคลเอนต์ใหม่',
  registerButton: 'สมัครสมาชิก', registerUsernamePlaceholder: 'ชื่อผู้ใช้', registerPasswordPlaceholder: 'รหัสผ่าน',
  trackTitle: 'การติดตามการรับและการส่งมอบ', trackButton: 'ติดตามการส่งมอบ', faqTitle: 'คำถามที่พบบ่อย',
  faq1Q: 'การขนส่งทางอากาศเร็วแค่ไหน?', faq1A: 'สินค้าทางอากาศส่วนใหญ่มาถึงในระหว่าง 24-48 ชั่วโมง',
  faq2Q: 'คุณจัดการศุลกากรระหว่างประเทศหรือไม่?', faq2A: 'ใช่ เรามีบริการปลดปล่อยศุลกากรที่ครอบคลุม',
  faq3Q: 'ฉันสามารถติดตามสินค้าของฉันแบบเรียลไทม์ได้หรือไม่?', faq3A: 'ใช่ ระบบของเรามีการอัปเดตแบบสดใจ',
  faq4Q: 'คุณมีบริการส่งควบคุมอุณหภูมิหรือไม่?', faq4A: 'ใช่ เราเชี่ยวชาญในการขนส่งห่วงโซ่อาหารที่เย็น',
  faq5Q: 'มีการส่งมอบวันหยุดสุดสัปดาห์หรือไม่?', faq5A: 'ใช่ ในบางพื้นที่',
  liveChatTitle: 'การสนับสนุนแชทสดใจ', liveChatNamePlaceholder: 'ชื่อของคุณ',
  liveChatEmailPlaceholder: 'อีเมลของคุณ', liveChatMessagePlaceholder: 'ข้อความของคุณ',
  chatbotTitle: 'บอท SwiftDelivery', chatbotGreeting: 'สวัสดี! ฉันสามารถช่วยคุณวันนี้ได้อย่างไร?',
  chatMessagePlaceholder: 'พิมพ์ข้อความของคุณ...', sendButton: 'ส่ง',
  newsletterTitle: 'อพเดตล่าสุด', newsletterText: 'สมัครสมาชิกจดหมายข่าวของเรา',
  emailLabel: 'อีเมล', subscribeButton: 'สมัครสมาชิก', followUs: 'ติดตามเรา', company: 'บริษัท', about: 'เกี่ยวกับเรา',
  helpCenter: 'ศูนย์ช่วยเหลือ', support: 'สนับสนุน', legal: 'กฎหมาย', privacy: 'นโยบายความเป็นส่วนตัว',
  terms: 'เงื่อนไขการใช้บริการ', footerNote: '© 2025 SwiftDelivery. สงวนลิขสิทธิ์'
}));

// Turkish
window.translations.tr = window.translations.tr || {};
Object.assign(window.translations.tr, Object.assign({}, commonKeys, {
  home: 'Anasayfa', gallery: 'Galeri', services: 'Hizmetler', track: 'İzle', login: 'Giriş', register: 'Kaydol',
  welcome: 'SwiftDelivery - Hava Kargo Lojistiği', intro: 'Hız, güvenlik ve hassasiyetle küresel kargo çözümleri.',
  getStarted: 'Başla', galleryTitle: 'Filo ve Tesisler', servicesTitle: 'Hizmetlerimiz',
  service1: 'Hava Kargo Express', service1Desc: 'Garantili zaman çizelgeleriyle öncelikli kargo teslimatı.',
  service2: 'Global Depolama', service2Desc: 'Stratejik olarak konumlandırılmış uluslararası merkezlerde güvenli depolama çözümleri.',
  service3: 'Gümrük Tahliyesi', service3Desc: 'Profesyonel gümrük işlemleri.',
  service4: 'Sıcaklık Kontrollü Kargo', service4Desc: 'Hassas mallar için özel nakliye ve depolama.',
  service5: 'Tehlikeli Mal Nakliyesi', service5Desc: 'Tehlikeli maddelerin sertifikalı ve uyumlu işlenmesi.',
  bookingTitle: 'Rezervasyon Panosu', bookingNamePlaceholder: 'Ad Soyad', bookingEmailPlaceholder: 'E-posta',
  bookingMessagePlaceholder: 'Rezervasyon Detayları', bookingSubmitButton: 'Rezervasyonu Gönder',
  testimonialsTitle: 'Müşteri Yorumları',
  testimonial1Text: 'SwiftDelivery tıbbi malzemeleri sınır ötesine hızlı bir şekilde gönderdi. Şiddetle tavsiye edilir!',
  testimonial1Author: '- Dr. Amina Yusuf', testimonial2Text: 'Takip sistemleri birinci sınıf.',
  testimonial2Author: '- James Okoro', testimonial3Text: 'Profesyonel, hızlı ve güvenilir.',
  testimonial3Author: '- GlobalTech Ltd.', contactTitle: 'İletişim', submitButton: 'Gönder',
  loginTitle: 'Müşteri Girişi', loginButton: 'Giriş', registerTitle: 'Yeni Müşteri Kaydı',
  registerButton: 'Kaydol', registerUsernamePlaceholder: 'Kullanıcı Adı', registerPasswordPlaceholder: 'Şifre',
  trackTitle: 'Alım ve Teslimat İzlemesi', trackButton: 'Gönderiyi İzle', faqTitle: 'Sık Sorulan Sorular',
  faq1Q: 'Hava kargo teslimatı ne kadar hızlı?', faq1A: 'Çoğu hava kargo 24-48 saat içinde ulaşır.',
  faq2Q: 'Uluslararası gümrüğü işler misiniz?', faq2A: 'Evet, tüm uluslararası gönderiler için kapsamlı gümrük hizmetleri sağlarız.',
  faq3Q: 'Kargonu gerçek zamanlı olarak izleyebilir miyim?', faq3A: 'Evet. Sistemimiz canlı güncellemeler sağlar.',
  faq4Q: 'Sıcaklık kontrollü nakliye sunuyor musunuz?', faq4A: 'Evet, soğuk zincir lojistiğinde uzmanız.',
  faq5Q: 'Hafta sonu teslimatı mevcut mu?', faq5A: 'Evet, seçilen bölgelerde mevcut.',
  liveChatTitle: 'Canlı Sohbet Desteği', liveChatNamePlaceholder: 'Adınız',
  liveChatEmailPlaceholder: 'E-postanız', liveChatMessagePlaceholder: 'Mesajınız',
  chatbotTitle: 'SwiftDelivery Botu', chatbotGreeting: 'Merhaba! Bugün nasıl yardımcı olabilirim?',
  chatMessagePlaceholder: 'Mesajınızı yazın...', sendButton: 'Gönder',
  newsletterTitle: 'Güncel Kalın', newsletterText: 'Bültenimize abone olun.',
  emailLabel: 'E-posta', subscribeButton: 'Abone Ol', followUs: 'Bizi Takip Et', company: 'Şirket', about: 'Hakkımızda',
  helpCenter: 'Yardım Merkezi', support: 'Destek', legal: 'Yasal', privacy: 'Gizlilik Politikası',
  terms: 'Hizmet Şartları', footerNote: '© 2025 SwiftDelivery. Tüm hakları saklıdır.'
}));

// LibreTranslate configuration for remaining 27 languages
const LIBRETRANSLATE_API = 'https://libretranslate.de/translate';
const REMAINING_LANGUAGES = ['pl', 'nl', 'sv', 'el', 'cs', 'hu', 'ro', 'uk', 'bn', 'sw', 'ur', 'am', 'fil', 'pa', 'mr', 'ta', 'kn', 'te', 'or', 'gu', 'ms', 'my', 'fi', 'da', 'no', 'he', 'fa'];

// Language code mapping for LibreTranslate
const LANG_CODE_MAP = {
  'pl': 'pl', 'nl': 'nl', 'sv': 'sv', 'el': 'el', 'cs': 'cs', 'hu': 'hu', 'ro': 'ro', 'uk': 'uk',
  'bn': 'bn', 'sw': 'sw', 'ur': 'ur', 'am': 'am', 'fil': 'tl', 'pa': 'pa', 'mr': 'mr', 'ta': 'ta',
  'kn': 'kn', 'te': 'te', 'or': 'or', 'gu': 'gu', 'ms': 'ms', 'my': 'my', 'fi': 'fi', 'da': 'da',
  'no': 'no', 'he': 'he', 'fa': 'fa'
};

// Initialize remaining languages with English fallback
REMAINING_LANGUAGES.forEach(lang => {
  window.translations[lang] = window.translations[lang] || {};
  Object.assign(window.translations[lang], commonKeys);
});

// Function to translate content using LibreTranslate for remaining languages
async function translateWithLibreTranslate(text, targetLang) {
  try {
    const libreTranslateLang = LANG_CODE_MAP[targetLang] || targetLang;
    const cacheKey = `sd-translation-${targetLang}-${text.substring(0, 50)}`;
    
    const cached = localStorage.getItem(cacheKey);
    if (cached) return cached;

    const response = await fetch(LIBRETRANSLATE_API, {
      method: 'POST',
      body: JSON.stringify({
        q: text,
        source: 'en',
        target: libreTranslateLang
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Translation failed');
    const data = await response.json();
    const translated = data.translatedText || text;
    
    try {
      localStorage.setItem(cacheKey, translated);
    } catch (e) {
      // ignore storage errors
    }
    
    return translated;
  } catch (error) {
    console.warn(`Translation error for ${targetLang}:`, error);
    return text;
  }
}

// Batch translate all keys for a language
async function translateLanguageBatch(lang) {
  try {
    const cacheKey = `sd-lang-${lang}-full`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      Object.assign(window.translations[lang], parsed);
      return;
    }

    const keys = Object.keys(commonKeys);
    const texts = keys.map(k => commonKeys[k]);
    const libreTranslateLang = LANG_CODE_MAP[lang] || lang;

    const response = await fetch(LIBRETRANSLATE_API, {
      method: 'POST',
      body: JSON.stringify({
        q: texts.join('\n[SEP]\n'),
        source: 'en',
        target: libreTranslateLang
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Batch translation failed');
    const data = await response.json();
    const translated = data.translatedText.split('\n[SEP]\n');

    const translations = {};
    keys.forEach((key, idx) => {
      translations[key] = translated[idx] || commonKeys[key];
    });

    Object.assign(window.translations[lang], translations);
    
    try {
      localStorage.setItem(cacheKey, JSON.stringify(translations));
    } catch (e) {
      // ignore storage errors
    }
  } catch (error) {
    console.warn(`Batch translation failed for ${lang}:`, error);
  }
}

// Global translation apply helper - single canonical implementation
function applyTranslations(lang) {
  const translations = window.translations;
  if (!lang || !translations[lang]) {
    console.warn(`applyTranslations: missing language or translations for ${lang}`);
    return 0;
  }

  const els = document.querySelectorAll('[data-i18n]');
  let updated = 0;

  els.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key] || translations[lang][commonKeys[key]];
    if (!value) return;

    const tag = el.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea') {
      if (!el.hasAttribute('data-i18n-force-text')) {
        el.placeholder = value;
      } else {
        el.value = value;
      }
    } else {
      try {
        el.textContent = value;
      } catch (e) {
        el.innerText = value;
      }
    }
    updated++;
  });

  // Handle RTL for Arabic
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.classList.add('rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.classList.remove('rtl');
  }

  try {
    localStorage.setItem('sd-lang', lang);
  } catch (e) {
    // ignore
  }

  console.log(`applyTranslations ${lang}: updated ${updated} elements`);
  return updated;
}

const VOICE_LANG_MAP = {
  'en': 'en-US',
  'fr': 'fr-FR',
  'es': 'es-ES',
  'de': 'de-DE',
  'zh': 'zh-CN',
  'ar': 'ar-SA',
  'hi': 'hi-IN',
  'pt': 'pt-BR',
  'ru': 'ru-RU',
  'ja': 'ja-JP',
  'it': 'it-IT',
  'pl': 'pl-PL',
  'ko': 'ko-KR',
  'vi': 'vi-VN',
  'th': 'th-TH',
  'tr': 'tr-TR',
  'id': 'id-ID',
  'nl': 'nl-NL',
  'sv': 'sv-SE',
  'el': 'el-GR',
  'cs': 'cs-CZ',
  'hu': 'hu-HU',
  'ro': 'ro-RO',
  'uk': 'uk-UA',
  'bn': 'bn-IN',
  'sw': 'sw-KE',
  'ur': 'ur-PK',
  'am': 'am-ET',
  'fil': 'fil-PH',
  'pa': 'pa-IN',
  'mr': 'mr-IN',
  'ta': 'ta-IN',
  'kn': 'kn-IN',
  'te': 'te-IN',
  'or': 'or-IN',
  'gu': 'gu-IN',
  'ms': 'ms-MY',
  'my': 'my-MM',
  'fi': 'fi-FI',
  'da': 'da-DK',
  'no': 'nb-NO',
  'he': 'he-IL',
  'fa': 'fa-IR'
};

window.updateVoiceLanguage = function(lang) {
  if (recognition && VOICE_LANG_MAP[lang]) {
    recognition.lang = VOICE_LANG_MAP[lang];
    console.log(`🎤 Voice recognition language updated to: ${VOICE_LANG_MAP[lang]}`);
  }
};

window.changeLanguage = function(lang) {
  console.log('changeLanguage called with', lang);
  const selectTop = document.querySelector('#languageSelect');
  const selectSide = document.querySelector('#sidebarLanguageSelect');
  if (selectTop) selectTop.value = lang;
  if (selectSide) selectSide.value = lang;
  const updated = applyTranslations(lang);
  window.updateVoiceLanguage(lang);
  console.log(`changeLanguage: updated ${updated} elements for ${lang}`);
  return updated || 0;
};

// ----- NEW: global voice-mode state and selection -----
let voiceModeEnabled = false;
let selectedVoice = null;

function pickFemaleVoice() {
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const preferredNames = [
    'Google UK English Female',
    'Google US English Female',
    'Microsoft Zira',
    'Microsoft Jenny',
    'Samantha'
  ];

  for (const name of preferredNames) {
    const v = voices.find(voice => voice.name.includes(name));
    if (v) return v;
  }

  const femaleLike = voices.find(v =>
    v.lang.toLowerCase().startsWith('en') &&
    /fem|zira|jenny|samantha|eva|linda/i.test(v.name)
  );
  if (femaleLike) return femaleLike;

  const anyEnglish = voices.find(v => v.lang.toLowerCase().startsWith('en'));
  if (anyEnglish) return anyEnglish;

  return voices[0];
}

function initVoiceSelection() {
  if (typeof window.speechSynthesis === 'undefined') return;
  selectedVoice = pickFemaleVoice();
}

if (typeof window.speechSynthesis !== 'undefined') {
  window.speechSynthesis.onvoiceschanged = initVoiceSelection;
  initVoiceSelection();
}

function speakBotReply(text) {
  if (!voiceModeEnabled || !text || typeof window.speechSynthesis === 'undefined') return;

  const utter = new SpeechSynthesisUtterance(text);
  if (selectedVoice) {
    utter.voice = selectedVoice;
  }
  utter.rate = 1.0;
  utter.pitch = 1.05;
  utter.volume = 1.0;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

// DOMContentLoaded wrapper
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle persist - wired to data-theme
  const themeToggle = $('#themeToggle');
  const applyTheme = (isDark) => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.body.classList.add('theme-transition');
    setTimeout(() => document.body.classList.remove('theme-transition'), 600);
    try {
      localStorage.setItem('sd-theme', isDark ? 'dark' : 'light');
    } catch (e) {}
  };

  const savedTheme = (() => {
    try {
      return localStorage.getItem('sd-theme');
    } catch {
      return null;
    }
  })();

  if (savedTheme === 'dark') {
    applyTheme(true);
    if (themeToggle) themeToggle.checked = true;
  } else {
    // default to light
    applyTheme(false);
    if (themeToggle) themeToggle.checked = false;
  }

  if (themeToggle) {
    themeToggle.addEventListener('change', () => applyTheme(themeToggle.checked));
  }

  // Translations - wire selects
  const langTop = $('#languageSelect');
  const langSide = $('#sidebarLanguageSelect');
  const savedLang = (() => {
    try {
      return localStorage.getItem('sd-lang');
    } catch {
      return null;
    }
  })() || 'en';

  if (langTop) langTop.value = savedLang;
  if (langSide) langSide.value = savedLang;

  requestAnimationFrame(() => {
    if (REMAINING_LANGUAGES.includes(savedLang)) {
      translateLanguageBatch(savedLang).then(() => {
        applyTranslations(savedLang);
      });
    } else {
      applyTranslations(savedLang);
    }
  });

  const handleLanguageChange = (value, source) => {
    console.log(`Language changed to ${value} from ${source}`);
    if (langTop && source !== langTop) langTop.value = value;
    if (langSide && source !== langSide) langSide.value = value;
    
    if (REMAINING_LANGUAGES.includes(value)) {
      console.log(`Fetching translations from LibreTranslate for ${value}...`);
      translateLanguageBatch(value).then(() => {
        applyTranslations(value);
      });
    } else {
      applyTranslations(value);
    }
    
    try {
      localStorage.setItem('sd-lang', value);
    } catch (e) {
      console.warn('Could not save language preference', e);
    }
  };

  if (langTop) {
    langTop.addEventListener('change', (e) => handleLanguageChange(e.target.value, langTop));
  }
  if (langSide) {
    langSide.addEventListener('change', (e) => handleLanguageChange(e.target.value, langSide));
  }

  // Sidebar/menu
  const menuToggle = $('#menuToggle');
  const sideMenu = $('#sideMenu');
  const closeMenu = $('#closeMenu');

  const closeSide = () => sideMenu?.classList.remove('open');

  if (menuToggle && sideMenu) {
    menuToggle.addEventListener('click', (ev) => {
      ev.stopPropagation();
      sideMenu.classList.toggle('open');
    });
    menuToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        sideMenu.classList.toggle('open');
      }
    });
  }
  if (closeMenu) {
    closeMenu.addEventListener('click', closeSide);
  }

  document.addEventListener('click', (e) => {
    if (sideMenu && menuToggle && !sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      closeSide();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSide();
  });

  // Smooth scroll for anchors
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Gallery auto-slide
  const gallerySlider = $('.gallery-slider');
  if (gallerySlider) {
    let autoTimer = null;
    const startAuto = () => {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = setInterval(() => {
        const maxScroll = gallerySlider.scrollWidth - gallerySlider.clientWidth;
        if (maxScroll <= 0) return;
        const next = Math.min(gallerySlider.scrollLeft + 310, maxScroll);
        if (gallerySlider.scrollLeft >= maxScroll - 2) {
          gallerySlider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          gallerySlider.scrollTo({ left: next, behavior: 'smooth' });
        }
      }, 2000);
    };

    gallerySlider.addEventListener('mouseenter', () => clearInterval(autoTimer));
    gallerySlider.addEventListener('mouseleave', startAuto);
    startAuto();
  }

  // ============ SWIFTDELIVERY CHATBOT NLU ============
  const INTENT_PATTERNS = {
    navigate_home: {
      keywords: ['home', 'main page', 'homepage', 'start', 'beginning', 'main', 'welcome'],
      phrases: ['take me home', 'go home', 'show me home', 'go to home page'],
      section: 'home'
    },
    navigate_gallery: {
      keywords: ['gallery', 'photos', 'images', 'pictures', 'portfolio', 'showcase', 'facilities', 'fleet', 'equipment'],
      phrases: ['show me gallery', 'show photos', 'view gallery', 'see our facilities', 'show equipment'],
      section: 'gallery'
    },
    navigate_services: {
      keywords: ['services', 'offerings', 'what do you offer', 'capabilities', 'features', 'packages', 'airfreight', 'warehouse', 'customs'],
      phrases: ['show services', 'what services', 'tell me about services', 'service options', 'your offerings'],
      section: 'services'
    },
    navigate_track: {
      keywords: ['track', 'tracking', 'where is my', 'status', 'shipment', 'package', 'delivery', 'cargo', 'courier'],
      phrases: ['track my package', 'check tracking', 'where is my shipment', 'track shipment', 'delivery status'],
      section: 'track'
    },
    navigate_contact: {
      keywords: ['contact', 'email', 'phone', 'address', 'reach us', 'call', 'message', 'contact us', 'get in touch'],
      phrases: ['contact us', 'how to contact', 'get in touch', 'contact information', 'reach out'],
      section: 'contact'
    },
    navigate_faq: {
      keywords: ['faq', 'frequently asked', 'questions', 'help', 'common issues', 'troubleshoot', 'problem', 'issue'],
      phrases: ['show faq', 'frequently asked questions', 'common questions', 'help me', 'how do i'],
      section: 'faq'
    },
    navigate_booking: {
      keywords: ['booking', 'book', 'reserve', 'schedule', 'send package', 'shipment', 'order', 'booking dashboard'],
      phrases: ['make booking', 'book shipment', 'schedule delivery', 'send package', 'new shipment'],
      section: 'booking'
    },
    navigate_testimonials: {
      keywords: ['testimonial', 'reviews', 'feedback', 'customers', 'what people say', 'customer feedback', 'success stories'],
      phrases: ['show testimonials', 'customer reviews', 'what customers say', 'success stories'],
      section: 'testimonials'
    },
    request_agent: {
      keywords: ['agent', 'representative', 'human', 'person', 'support', 'help', 'team', 'staff', 'operator', 'talk', 'speak', 'chat', 'contact', 'reach', 'connect', 'escalate', 'manager', 'admin'],
      phrases: [
        'speak with agent', 'talk to agent', 'speak to agent', 'talk with agent', 'speak with representative', 'human support', 'talk to human', 'speak to human', 'agent assistance', 'request agent', 'connect me with support',
        'i want to speak with agent', 'i want to speak to agent', 'i want to speak to an agent', 'i want to talk to an agent', 'i want to talk with agent', 'i need to speak with an agent', 'i need to speak to an agent', 'i need to talk to an agent', 'i need to talk with agent', 'can i speak with an agent', 'can i speak to an agent', 'can i talk to an agent', 'can i talk with an agent', 'let me speak with an agent', 'let me speak to an agent', 'let me talk to an agent', 'let me talk with agent',
        'connect me to an agent', 'put me through to an agent', 'transfer me to an agent', 'i need an agent', 'get me an agent',
        'speak to someone', 'talk to someone', 'speak to a person', 'talk to a person', 'i need a person', 'i need someone',
        'human agent', 'live agent', 'real person', 'real support', 'actual person', 'actual support', 'real agent', 'live support',
        'escalate to agent', 'escalate my issue', 'escalate to support', 'i need escalation',
        'agent please', 'support please', 'help please', 'assist me', 'can you help', 'i need help',
        'customer service', 'customer support', 'support team', 'support staff', 'help desk',
        'speak to manager', 'talk to manager', 'manager please', 'need manager',
        'contact agent', 'contact support', 'reach support', 'reach agent', 'reach someone',
        'not a bot', 'not an ai', 'not automated', 'want human', 'need human', 'real help',
        'call support', 'call agent', 'call someone', 'get support', 'get help'
      ],
      action: 'openFloatingChat',
      message: 'Hi, I would like to speak with a support agent. Can you help me?'
    },
    leave_feedback: {
      keywords: ['feedback', 'review', 'rate', 'opinion', 'comment', 'suggestion', 'complaint', 'complain', 'issue', 'problem', 'report', 'tell', 'express', 'say', 'message', 'inquire'],
      phrases: [
        'leave feedback', 'write review', 'give feedback', 'rate service', 'share review', 'leave comment', 'submit feedback',
        'i want to leave feedback', 'i want to give feedback', 'i have feedback', 'i would like to share feedback',
        'can i leave feedback', 'how do i leave feedback', 'where do i leave feedback',
        'complaint', 'i have a complaint', 'i want to complain', 'file a complaint', 'submit complaint',
        'suggestion', 'i have a suggestion', 'i want to suggest', 'i have an idea',
        'review service', 'share my experience', 'tell about experience', 'rate your service',
        'your service', 'how you did', 'the experience', 'the service was'
      ],
      action: 'openFloatingChat',
      message: 'I would like to leave feedback about my experience with SwiftDelivery.'
    },
    booking_assistance: {
      keywords: ['booking', 'book', 'reserve', 'schedule', 'shipment', 'send', 'package', 'help', 'assistance', 'problem', 'issue', 'trouble', 'difficulty'],
      phrases: [
        'help me book', 'i need help booking', 'booking assistance', 'help with booking',
        'i want to book', 'i need to book', 'can you help me book', 'help me make a booking',
        'booking problem', 'booking issue', 'booking trouble', 'trouble booking', 'problem booking',
        'can\'t book', 'cannot book', 'unable to book', 'can\'t make booking', 'having trouble booking',
        'book a shipment', 'send a package', 'schedule shipment', 'book delivery',
        'how to book', 'how do i book', 'help me send package', 'how to send'
      ],
      action: 'openFloatingChat',
      message: 'I need assistance with making a booking. Can you help me?'
    },
    password_reset: {
      keywords: ['password', 'reset', 'forgot', 'login', 'account', 'access', 'locked', 'sign', 'credential', 'authentication', 'verify', 'trouble'],
      phrases: [
        'forgot password', 'reset password', 'can\'t login', 'password reset', 'account locked', 'help login',
        'i forgot my password', 'i forgot password', 'i need to reset password', 'reset my password',
        'cannot login', 'unable to login', 'can\'t log in', 'trouble logging in', 'can\'t sign in',
        'account locked', 'locked out', 'account disabled', 'access denied',
        'help me login', 'help me sign in', 'can\'t access account', 'can\'t access profile',
        'forgot username', 'forget password', 'new password', 'change password',
        'authentication failed', 'login failed', 'sign in failed', 'login problem'
      ],
      action: 'openFloatingChat',
      message: 'I\'m having trouble with my account login. Can you help me reset my password?'
    },
    track_courier: {
      keywords: ['track', 'tracking', 'courier', 'package', 'shipment', 'delivery', 'status', 'where', 'locate', 'find'],
      phrases: [
        'track courier', 'track my courier', 'track package', 'track shipment', 'track delivery', 'track my package', 'track my shipment',
        'where is my package', 'where is my shipment', 'where is my courier', 'where is my delivery',
        'check tracking', 'check status', 'delivery status', 'shipment status', 'tracking status', 'courier status',
        'i want to track', 'i need to track', 'how do i track', 'track my order',
        'show me tracking', 'show tracking', 'show my tracking', 'show courier', 'show package'
      ],
      action: 'clickButton',
      buttonSelector: '#track',
      message: null
    },
    change_language: {
      keywords: ['language', 'english', 'french', 'spanish', 'german', 'chinese', 'arabic', 'hindi', 'portuguese', 'russian', 'japanese', 'italian', 'polish', 'korean', 'vietnamese', 'thai', 'turkish', 'indonesian', 'dutch', 'swedish', 'greek', 'czech', 'hungarian', 'romanian', 'ukrainian', 'bengali', 'swahili', 'urdu', 'amharic', 'filipino', 'punjabi', 'marathi', 'tamil', 'kannada', 'telugu', 'odia', 'gujarati', 'malay', 'burmese', 'finnish', 'danish', 'norwegian', 'hebrew', 'persian', 'français', 'español', 'deutsch', '中文', 'العربية', 'हिन्दी', 'português', 'русский', '日本語', 'italiano', 'polski', '한국어', 'tiếng việt', 'ไทย', 'türkçe', 'bahasa indonesia', 'nederlands', 'svenska', 'ελληνικά', 'čeština', 'magyar', 'română', 'українська', 'বাঙ্গালি', 'kiswahili', 'اردو', 'አማርኛ', 'tagalog', 'ਪੰਜਾਬੀ', 'मराठी', 'தமிழ்', 'ಕನ್ನಡ', 'తెలుగు', 'ଓଡିଆ', 'ગુજરાતી', 'bahasa melayu', 'မြန်မာ', 'suomi', 'dansk', 'norsk', 'עברית', 'فارسی', 'translate', 'convert', 'use', 'set', 'prefer'],
      phrases: [
        'change language', 'change to', 'switch to', 'switch language', 'select language', 'set language', 'choose language', 'pick language', 'use language',
        'i want', 'i need', 'speak in', 'talk in', 'translate to', 'convert to', 'use', 'i prefer', 'prefer language',
        'change to english', 'change to french', 'change to spanish', 'change to german', 'change to chinese', 'change to arabic', 'change to portuguese', 'change to italian', 'change to german', 'change to russian', 'change to japanese', 'change to korean', 'change to thai', 'change to turkish', 'change to dutch', 'change to swedish', 'change to polish', 'change to hebrew', 'change to greek', 'change to czech', 'change to hungarian', 'change to romanian', 'change to portuguese', 'change to ukrainian', 'change to finnish', 'change to norwegian', 'change to danish', 'change to hindi', 'change to bengali', 'change to urdu', 'change to persian', 'change to turkish', 'change to indonesian', 'change to vietnamese', 'change to tagalog', 'change to swahili', 'change to malay', 'change to burmese', 'change to thai',
        'switch to english', 'switch to french', 'switch to spanish', 'switch to german', 'switch to chinese', 'switch to arabic', 'switch to russian', 'switch to japanese', 'switch to korean', 'switch to portuguese', 'switch to italian', 'switch to dutch', 'switch to swedish', 'switch to polish', 'switch to hebrew', 'switch to thai', 'switch to turkish', 'switch to indonesian', 'switch to vietnamese',
        'i want english', 'i want french', 'i want spanish', 'i want german', 'i want chinese', 'i want arabic', 'i want portuguese', 'i want italian', 'i want russian', 'i want japanese', 'i want korean', 'i want thai', 'i want turkish', 'i want dutch', 'i want swedish', 'i want polish', 'i want hebrew', 'i want greek', 'i want czech', 'i want hungarian', 'i want romanian', 'i want hindi', 'i want bengali', 'i want urdu', 'i want persian', 'i want vietnamese', 'i want tagalog', 'i want swahili', 'i want malay', 'i want burmese',
        'i need english', 'i need french', 'i need spanish', 'i need german', 'i need chinese', 'i need arabic', 'i need portuguese', 'i need russian', 'i need japanese', 'i need korean', 'i need thai', 'i need turkish', 'i need dutch', 'i need swedish', 'i need polish', 'i need hebrew', 'i need hindi', 'i need bengali', 'i need urdu', 'i need persian',
        'speak english', 'speak french', 'speak spanish', 'speak german', 'speak chinese', 'speak arabic', 'speak portuguese', 'speak russian', 'speak japanese', 'speak korean', 'speak thai', 'speak turkish', 'speak dutch', 'speak swedish', 'speak polish', 'speak hebrew', 'speak hindi', 'speak bengali', 'speak urdu', 'speak persian', 'speak vietnamese', 'speak tagalog', 'speak swahili', 'speak malay',
        'talk english', 'talk french', 'talk spanish', 'talk german', 'talk chinese', 'talk arabic', 'talk portuguese', 'talk russian', 'talk japanese', 'talk korean', 'talk thai', 'talk turkish', 'talk dutch', 'talk swedish', 'talk polish', 'talk hebrew', 'talk hindi', 'talk bengali', 'talk urdu', 'talk persian', 'talk vietnamese', 'talk tagalog',
        'language english', 'language french', 'language spanish', 'language german', 'language chinese', 'language arabic', 'language portuguese', 'language russian', 'language japanese', 'language korean', 'language thai', 'language turkish', 'language dutch', 'language swedish', 'language polish', 'language hebrew', 'language hindi', 'language bengali', 'language urdu', 'language persian',
        'english please', 'french please', 'spanish please', 'german please', 'chinese please', 'arabic please', 'portuguese please', 'russian please', 'japanese please', 'korean please', 'thai please', 'turkish please', 'dutch please', 'swedish please', 'polish please', 'hebrew please', 'hindi please', 'bengali please', 'urdu please', 'persian please',
        'use english', 'use french', 'use spanish', 'use german', 'use chinese', 'use arabic', 'use portuguese', 'use russian', 'use japanese', 'use korean',
        'in english', 'in french', 'in spanish', 'in german', 'in chinese', 'in arabic', 'in portuguese', 'in russian', 'in japanese', 'in korean', 'in thai', 'in turkish', 'in dutch', 'in swedish', 'in polish', 'in hebrew', 'in hindi', 'in bengali', 'in urdu', 'in persian',
        'prefer english', 'prefer french', 'prefer spanish', 'prefer german', 'prefer chinese', 'prefer arabic', 'prefer portuguese', 'prefer russian', 'prefer japanese', 'prefer korean'
      ],
      action: 'changeLanguage',
      message: null
    },
    show_faq: {
      keywords: ['faq', 'frequently asked', 'questions', 'help', 'question', 'answer', 'qa', 'help section', 'common questions', 'common issues', 'troubleshoot', 'problem', 'issue', 'how to', 'how do', 'what is', 'explain', 'clarify', 'understand', 'learn'],
      phrases: [
        'show faq', 'open faq', 'display faq', 'view faq', 'go to faq', 'visit faq', 'navigate faq', 'show me faq', 'show frequently asked questions',
        'frequently asked questions', 'faq section', 'faq page', 'faq tab', 'show questions', 'show answers', 'show help',
        'help section', 'help me', 'help please', 'i need help', 'i have a question', 'i have questions', 'do you have faq', 'show me faq',
        'common questions', 'common issues', 'common problems', 'answers to questions', 'question and answer', 'questions and answers',
        'troubleshoot', 'troubleshooting', 'how to troubleshoot', 'how do i fix', 'how do i solve', 'how can i fix',
        'what is', 'what are', 'how does', 'how do', 'how to use', 'how to do', 'how can i',
        'explain faq', 'show me help', 'i need answers', 'i need help', 'what can you help with', 'can you help me',
        'take me to faq', 'send me to faq', 'navigate to faq', 'go to help', 'show help section', 'show help page'
      ],
      action: 'clickButton',
      buttonSelector: 'a[href="#faq"]',
      navigateToSection: 'faq',
      message: null
    },
    toggle_theme: {
      keywords: ['theme', 'dark', 'night', 'day', 'light', 'mode', 'brightness', 'contrast', 'visibility', 'clear', 'readability', 'difficult', 'hard to see', 'hard to read', 'bright', 'too dark', 'too bright'],
      phrases: [
        'toggle theme', 'switch theme', 'change theme', 'dark mode', 'light mode', 'night mode', 'day mode',
        'turn on dark mode', 'turn off dark mode', 'enable dark mode', 'disable dark mode', 'turn on light mode', 'turn off light mode',
        'switch to dark', 'switch to light', 'switch to night', 'switch to day', 'go dark', 'go light',
        'i want dark', 'i want light', 'i need dark', 'i need light', 'i prefer dark', 'i prefer light',
        'dark please', 'light please', 'night please', 'day please', 'dark mode please', 'light mode please',
        'make it dark', 'make it light', 'make it darker', 'make it lighter', 'make it brighter', 'make it less bright',
        'hard to read', 'hard to see', 'difficult to read', 'difficult to see', 'too bright', 'too dark', 'text is not clear', 'text is unclear',
        'i can\'t see', 'i can\'t read', 'can\'t see clearly', 'can\'t read clearly', 'visibility issue', 'readability issue',
        'switch between dark and light', 'switch between light and dark', 'toggle dark light', 'toggle light dark',
        'enable night mode', 'disable night mode', 'activate night mode', 'deactivate night mode',
        'clearer', 'more readable', 'better contrast', 'improve readability', 'improve visibility'
      ],
      action: 'toggleTheme',
      message: null
    },
    service_specific: {
      keywords: ['airfreight', 'express', 'warehouse', 'warehousing', 'customs', 'clearance', 'temperature', 'controlled', 'temp controlled', 'dangerous goods', 'hazmat', 'perishable', 'pharma', 'pharmaceutical', 'cold chain', 'refrigerated', 'frozen', 'urgent', 'priority', 'fast', 'quick', 'slow'],
      phrases: [
        'airfreight', 'air freight', 'express delivery', 'priority delivery', 'urgent shipment',
        'warehouse', 'warehousing', 'storage', 'store my cargo', 'need storage', 'secure storage',
        'customs', 'customs clearance', 'border processing', 'import help', 'export help', 'customs documentation',
        'temperature controlled', 'temp controlled', 'cold storage', 'refrigerated cargo', 'frozen goods', 'pharma transport', 'pharmaceutical shipping', 'perishable goods', 'perishable cargo', 'cold chain',
        'dangerous goods', 'hazmat', 'hazardous materials', 'hazardous cargo', 'dangerous cargo', 'restricted items', 'special handling'
      ],
      action: 'scrollToService',
      section: 'services'
    },
    complaint_detection: {
      keywords: ['complaint', 'complain', 'issue', 'problem', 'damaged', 'late', 'delay', 'broken', 'missing', 'lost', 'unsatisfied', 'unhappy', 'disappointed', 'refund', 'refund', 'resolve', 'fix', 'help'],
      phrases: [
        'my package is late', 'package is delayed', 'delivery is late', 'shipment is late',
        'damaged goods', 'package is damaged', 'cargo is damaged', 'broken package', 'items are broken',
        'missing items', 'items missing', 'incomplete delivery', 'incomplete shipment', 'items are missing',
        'lost package', 'lost shipment', 'package lost', 'shipment lost', 'where is my package',
        'i have a problem', 'i have an issue', 'there is a problem', 'there is an issue', 'something is wrong',
        'refund please', 'i want a refund', 'need refund', 'request refund', 'refund this order',
        'not satisfied', 'not happy', 'disappointed', 'unsatisfied', 'poor service', 'bad experience',
        'complaint', 'file complaint', 'make complaint', 'submit complaint', 'i am upset', 'i am frustrated'
      ],
      action: 'openFloatingChat',
      isComplaint: true,
      message: '🚨 I detected a delivery issue with your shipment. Let me connect you with a specialist to resolve this quickly. Please provide your tracking ID or order number.'
    },
    account_authentication: {
      keywords: ['login', 'log in', 'sign in', 'signin', 'register', 'signup', 'sign up', 'create account', 'new account', 'forgot password', 'reset password', 'password reset', 'account locked', 'access account', 'profile', 'my account'],
      phrases: [
        'login', 'log in', 'log me in', 'sign in', 'sign me in', 'i want to login', 'i need to login', 'can i login',
        'register', 'sign up', 'create account', 'new account', 'create new account', 'how to register', 'how do i register',
        'forgot password', 'forgot my password', 'reset password', 'password reset', 'reset my password', 'i forgot password',
        'account locked', 'locked out', 'can\'t access account', 'can\'t login', 'unable to login', 'login problem', 'login issue',
        'my account', 'my profile', 'view my account', 'access my profile', 'open my account', 'view profile',
        'change password', 'update password', 'set password', 'new password', 'forgot username'
      ],
      action: 'navigateToAuth',
      section: 'contact'
    },
    testimonials_reviews: {
      keywords: ['testimonial', 'review', 'reviews', 'feedback', 'customer feedback', 'success stories', 'case studies', 'what customers', 'what people say', 'customer experience', 'user experience', 'social proof', 'ratings', 'rating'],
      phrases: [
        'show testimonials', 'show reviews', 'show customer feedback', 'customer testimonials', 'customer reviews',
        'what do customers say', 'what customers say', 'what people say', 'what do people say', 'customer success stories',
        'success stories', 'case studies', 'success cases', 'showcase', 'customer experience',
        'social proof', 'customer ratings', 'user ratings', 'show ratings', 'user reviews',
        'see reviews', 'view reviews', 'read testimonials', 'read reviews', 'see testimonials'
      ],
      action: 'clickButton',
      buttonSelector: 'a[href="#testimonials"]',
      navigateToSection: 'testimonials',
      message: null
    },
    smart_booking: {
      keywords: ['book', 'booking', 'reserve', 'shipment', 'send', 'package', 'delivery', 'help', 'assistance', 'schedule', 'arrange', 'plan', 'need to ship'],
      phrases: [
        'help me book', 'i want to book', 'i need to book', 'book a shipment', 'help with booking', 'booking assistance',
        'i need to send', 'i want to send', 'send a package', 'ship a package', 'help me send',
        'book delivery', 'schedule delivery', 'arrange delivery', 'plan delivery',
        'help me make a booking', 'can you help me book', 'i need booking help', 'how do i book',
        'book a delivery', 'new booking', 'make a booking', 'create booking'
      ],
      action: 'openFloatingChat',
      isBooking: true,
      message: 'I can help you with your booking! Let me guide you through the process. What type of service do you need - Airfreight, Warehouse, Customs, Temperature-Controlled, or Dangerous Goods?'
    },
    emergency_urgent: {
      keywords: ['urgent', 'emergency', 'asap', 'emergency', 'critical', 'immediately', 'right away', 'time-sensitive', 'time sensitive', 'rush', 'expedite', 'fastest', 'highest priority', 'top priority'],
      phrases: [
        'this is urgent', 'urgent matter', 'urgent issue', 'urgent request',
        'emergency', 'this is an emergency', 'it\'s an emergency', 'emergency help',
        'asap', 'as soon as possible', 'right now', 'immediately', 'right away', 'urgent please',
        'critical', 'this is critical', 'critical issue', 'critical problem', 'critical situation',
        'time-sensitive', 'time sensitive', 'time critical', 'rush this', 'expedite this',
        'fastest', 'fastest delivery', 'fastest possible', 'highest priority', 'top priority', 'rush order'
      ],
      action: 'openFloatingChat',
      isUrgent: true,
      priority: 'URGENT',
      message: '🚨 URGENT REQUEST RECEIVED 🚨 Your request has been flagged as urgent priority. I\'m immediately connecting you with our fastest-response support team. They will assist you right away.'
    }
  };

  const NAVIGATION_VERBS = [
    'show', 'display', 'view', 'see', 'look', 'take', 'go', 'move', 'navigate', 'jump',
    'scroll', 'bring', 'get', 'find', 'search', 'check', 'open', 'access', 'visit',
    'tell', 'explain', 'describe', 'inform', 'help', 'guide', 'direct'
  ];

  const LANGUAGE_MAP = {
    'en': ['english'],
    'fr': ['french', 'français'],
    'es': ['spanish', 'español'],
    'de': ['german', 'deutsch'],
    'zh': ['chinese', '中文', 'mandarin'],
    'ar': ['arabic', 'العربية'],
    'hi': ['hindi', 'हिन्दी'],
    'pt': ['portuguese', 'português'],
    'ru': ['russian', 'русский'],
    'ja': ['japanese', '日本語'],
    'it': ['italian', 'italiano'],
    'pl': ['polish', 'polski'],
    'ko': ['korean', '한국어'],
    'vi': ['vietnamese', 'tiếng việt'],
    'th': ['thai', 'ไทย'],
    'tr': ['turkish', 'türkçe'],
    'id': ['indonesian', 'bahasa indonesia'],
    'nl': ['dutch', 'nederlands'],
    'sv': ['swedish', 'svenska'],
    'el': ['greek', 'ελληνικά'],
    'cs': ['czech', 'čeština'],
    'hu': ['hungarian', 'magyar'],
    'ro': ['romanian', 'română'],
    'uk': ['ukrainian', 'українська'],
    'bn': ['bengali', 'বাঙ্গালি'],
    'sw': ['swahili', 'kiswahili'],
    'ur': ['urdu', 'اردو'],
    'am': ['amharic', 'አማርኛ'],
    'fil': ['filipino', 'tagalog'],
    'pa': ['punjabi', 'ਪੰਜਾਬੀ'],
    'mr': ['marathi', 'मराठी'],
    'ta': ['tamil', 'தமிழ்'],
    'kn': ['kannada', 'ಕನ್ನಡ'],
    'te': ['telugu', 'తెలుగు'],
    'or': ['odia', 'ଓଡିଆ'],
    'gu': ['gujarati', 'ગુજરાતી'],
    'ms': ['malay', 'bahasa melayu'],
    'my': ['burmese', 'myanmar', 'မြန်မာ'],
    'fi': ['finnish', 'suomi'],
    'da': ['danish', 'dansk'],
    'no': ['norwegian', 'norsk'],
    'he': ['hebrew', 'עברית'],
    'fa': ['persian', 'فارسی']
  };

  function detectTargetLanguage(message) {
    const normalizedMsg = message.toLowerCase();
    for (const [langCode, langNames] of Object.entries(LANGUAGE_MAP)) {
      for (const name of langNames) {
        if (normalizedMsg.includes(name)) {
          return langCode;
        }
      }
    }
    return null;
  }

  const SERVICE_KEYWORDS = {
    'airfreight': { title: 'Airfreight Express', position: 0 },
    'warehouse': { title: 'Global Warehousing', position: 1 },
    'customs': { title: 'Customs Clearance', position: 2 },
    'temperature': { title: 'Temperature-Controlled Cargo', position: 3 },
    'dangerous': { title: 'Dangerous Goods Transport', position: 4 }
  };

  function detectServiceType(message) {
    const normalizedMsg = message.toLowerCase();
    for (const [keyword, serviceData] of Object.entries(SERVICE_KEYWORDS)) {
      if (normalizedMsg.includes(keyword)) {
        return serviceData;
      }
    }
    return null;
  }

  function scrollToServiceCard(serviceData) {
    console.log('🎯 Scrolling to service:', serviceData.title);
    navigateToChatbotSection('services');
    setTimeout(() => {
      const serviceCards = document.querySelectorAll('.service-card');
      if (serviceCards[serviceData.position]) {
        const card = serviceCards[serviceData.position];
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        if (!card.classList.contains('chatbot-highlight')) {
          card.classList.add('chatbot-highlight');
          setTimeout(() => card.classList.remove('chatbot-highlight'), 3000);
        }
        console.log('✅ Scrolled to:', serviceData.title);
      }
    }, 500);
  }

  function saveConversationContext(userMessage, intentData) {
    try {
      const context = {
        lastMessage: userMessage,
        lastIntent: intentData.intent,
        lastService: intentData.serviceType,
        timestamp: Date.now(),
        sessionId: sessionStorage.getItem('chatbot_session') || Math.random().toString(36).substring(7)
      };
      sessionStorage.setItem('chatbot_session', context.sessionId);
      sessionStorage.setItem('chatbot_context', JSON.stringify(context));
      console.log('💾 Context saved:', context);
    } catch (e) {
      console.warn('Context storage error:', e);
    }
  }

  function getConversationContext() {
    try {
      const context = sessionStorage.getItem('chatbot_context');
      return context ? JSON.parse(context) : null;
    } catch (e) {
      console.warn('Context retrieval error:', e);
      return null;
    }
  }

  function saveUserInfo(name, email) {
    try {
      const userInfo = { name, email, timestamp: Date.now() };
      localStorage.setItem('chatbot_user_info', JSON.stringify(userInfo));
      console.log('👤 User info saved');
    } catch (e) {
      console.warn('User info storage error:', e);
    }
  }

  function getUserInfo() {
    try {
      const userInfo = localStorage.getItem('chatbot_user_info');
      return userInfo ? JSON.parse(userInfo) : null;
    } catch (e) {
      console.warn('User info retrieval error:', e);
      return null;
    }
  }

  function autoFillFormFields(name, email) {
    const nameInputs = document.querySelectorAll('input[name="name"], input[placeholder*="Name"], input[placeholder*="name"]');
    const emailInputs = document.querySelectorAll('input[name="email"], input[placeholder*="Email"], input[placeholder*="email"]');
    
    if (name) {
      nameInputs.forEach(input => {
        if (!input.value) input.value = name;
      });
    }
    if (email) {
      emailInputs.forEach(input => {
        if (!input.value) input.value = email;
      });
    }
    console.log('✏️ Form fields auto-filled');
  }

  function suggestFormFilling() {
    const userInfo = getUserInfo();
    if (userInfo && userInfo.name && userInfo.email) {
      console.log('💡 Form pre-fill available:', userInfo);
      return userInfo;
    }
    return null;
  }

  function detectUrgency(message) {
    const urgentKeywords = ['urgent', 'emergency', 'asap', 'critical', 'immediately', 'right away', 'rush', 'expedite'];
    const normalizedMsg = message.toLowerCase();
    return urgentKeywords.some(keyword => normalizedMsg.includes(keyword));
  }

  function hasNavigationVerb(message) {
    const words = message.split(/\s+/);
    return words.some(word => {
      const cleanWord = word.replace(/[^\w]/g, '').toLowerCase();
      return NAVIGATION_VERBS.includes(cleanWord);
    });
  }

  function detectChatbotIntent(userMessage) {
    const normalizedMessage = userMessage.toLowerCase().trim();
    const hasNavVerb = hasNavigationVerb(normalizedMessage);
    let highestScore = 0;
    let detectedIntent = null;
    let targetSection = null;
    let action = null;
    let actionMessage = null;

    for (const [intent, patterns] of Object.entries(INTENT_PATTERNS)) {
      let score = 0;
      
      patterns.phrases.forEach((phrase) => {
        if (normalizedMessage.includes(phrase)) {
          score += 10;
        }
      });
      
      patterns.keywords.forEach((keyword) => {
        if (normalizedMessage.includes(keyword)) {
          const baseScore = 1;
          if (hasNavVerb) {
            score += baseScore * 5;
          } else {
            score += baseScore;
          }
        }
      });
      
      if (score > highestScore) {
        highestScore = score;
        detectedIntent = intent;
        targetSection = patterns.section;
        action = patterns.action || null;
        actionMessage = patterns.message || null;
      }
    }

    let targetLanguage = null;
    if (action === 'changeLanguage') {
      targetLanguage = detectTargetLanguage(userMessage);
    }

    const serviceType = detectServiceType(userMessage);
    const isUrgent = detectUrgency(userMessage);
    const context = getConversationContext();

    return {
      intent: detectedIntent,
      confidence: Math.min(highestScore / 10, 1),
      section: targetSection,
      shouldNavigate: highestScore > 0 && detectedIntent !== null,
      action: action,
      actionMessage: actionMessage,
      buttonSelector: INTENT_PATTERNS[detectedIntent]?.buttonSelector || null,
      targetLanguage: targetLanguage,
      serviceType: serviceType,
      isUrgent: isUrgent,
      isComplaint: INTENT_PATTERNS[detectedIntent]?.isComplaint || false,
      isBooking: INTENT_PATTERNS[detectedIntent]?.isBooking || false,
      priority: isUrgent ? 'URGENT' : 'NORMAL',
      context: context
    };
  }

  function navigateToChatbotSection(sectionId) {
    console.log('🔍 Looking for section:', sectionId);
    if (!sectionId) {
      console.error('❌ No sectionId provided!');
      return false;
    }
    
    const element = document.getElementById(sectionId);
    if (!element) {
      console.error(`❌ Section #${sectionId} not found in DOM`);
      console.log('Available sections:', Array.from(document.querySelectorAll('section[id]')).map(s => s.id));
      return false;
    }
    
    console.log('✅ Section found:', sectionId);
    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;
    
    console.log('Scrolling to position:', offsetPosition);
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    
    element.focus({ preventScroll: true });
    
    if (element.classList && !element.classList.contains('chatbot-highlight')) {
      element.classList.add('chatbot-highlight');
      console.log('✨ Highlight animation applied');
      setTimeout(() => {
        element.classList.remove('chatbot-highlight');
      }, 3000);
    }
    
    console.log('✅ Navigation completed for:', sectionId);
    return true;
  }

  // Add highlight animation if not already present
  if (!document.querySelector('style[data-chatbot-highlight]')) {
    const style = document.createElement('style');
    style.setAttribute('data-chatbot-highlight', 'true');
    style.textContent = `
      @keyframes chatbot-highlight-pulse {
        0% {
          background-color: rgba(79, 70, 229, 0.1);
          box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7);
        }
        50% {
          box-shadow: 0 0 0 15px rgba(79, 70, 229, 0);
        }
        100% {
          background-color: rgba(79, 70, 229, 0);
          box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
        }
      }
      
      .chatbot-highlight {
        animation: chatbot-highlight-pulse 1s ease-out !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Debug testing function - accessible from console
  window.testChatbotNLU = function(testMessage) {
    console.log('🧪 Testing NLU with message:', testMessage);
    const result = detectChatbotIntent(testMessage);
    console.log('Result:', result);
    if (result.action && result.confidence > 0.3) {
      console.log('✅ Action triggered! Executing:', result.action);
      executeChatbotAction(result);
    } else if (result.shouldNavigate && result.confidence > 0.3) {
      console.log('✅ Navigation triggered! Attempting to scroll to:', result.section);
      navigateToChatbotSection(result.section);
    } else {
      console.log('⚠️ No action triggered. Confidence:', result.confidence, 'Threshold: 0.3');
    }
    return result;
  };

  window.testFloatingChatEvent = function(message) {
    console.log('🧪 Testing floating chat event with message:', message);
    const event = new CustomEvent('openFloatingChatWithMessage', {
      detail: { message: message }
    });
    window.dispatchEvent(event);
    console.log('✅ Event dispatched');
  };

  window.listIntentPatterns = function() {
    console.log('📋 Available Intent Patterns:');
    for (const [intent, patterns] of Object.entries(INTENT_PATTERNS)) {
      console.log(`\n${intent}:`);
      console.log('  Phrases:', patterns.phrases);
      console.log('  Keywords:', patterns.keywords);
      console.log('  Section:', patterns.section);
    }
  };

  window.testServiceNavigation = function(serviceName) {
    console.log(`🧪 Testing service navigation for: ${serviceName}`);
    const result = detectChatbotIntent(`I need ${serviceName}`);
    console.log('Result:', result);
    if (result.serviceType) {
      console.log('✅ Service detected:', result.serviceType);
      scrollToServiceCard(result.serviceType);
    } else {
      console.log('❌ Service not detected');
    }
  };

  window.testComplaintDetection = function(complaintMessage) {
    console.log(`🧪 Testing complaint detection: "${complaintMessage}"`);
    const result = detectChatbotIntent(complaintMessage);
    console.log('Result:', result);
    console.log('Is Complaint:', result.isComplaint);
    if (result.isComplaint) {
      console.log('✅ Complaint detected - should escalate to specialist');
    }
  };

  window.testUrgentDetection = function(urgentMessage) {
    console.log(`🧪 Testing urgent detection: "${urgentMessage}"`);
    const result = detectChatbotIntent(urgentMessage);
    console.log('Result:', result);
    console.log('Is Urgent:', result.isUrgent, '| Priority:', result.priority);
    if (result.isUrgent) {
      console.log('✅ Urgent request detected - should escalate to priority queue');
    }
  };

  window.testContextMemory = function() {
    console.log('🧪 Testing context memory');
    const testContext = {
      lastMessage: 'I need airfreight',
      lastIntent: 'service_specific',
      lastService: { title: 'Airfreight Express', position: 0 },
      timestamp: Date.now(),
      sessionId: 'test-session-123'
    };
    sessionStorage.setItem('chatbot_context', JSON.stringify(testContext));
    const retrieved = getConversationContext();
    console.log('Saved context:', testContext);
    console.log('Retrieved context:', retrieved);
    console.log(retrieved ? '✅ Context saved and retrieved' : '❌ Context retrieval failed');
  };

  window.testUserInfoStorage = function(name, email) {
    console.log('🧪 Testing user info storage');
    saveUserInfo(name, email);
    const retrieved = getUserInfo();
    console.log('Saved:', { name, email });
    console.log('Retrieved:', retrieved);
    console.log(retrieved && retrieved.name === name ? '✅ User info saved correctly' : '❌ User info storage failed');
  };

  window.testFormAutoFill = function() {
    console.log('🧪 Testing form auto-fill');
    const userInfo = suggestFormFilling();
    if (userInfo) {
      console.log('💡 User info available for pre-fill:', userInfo);
      autoFillFormFields(userInfo.name, userInfo.email);
      console.log('✅ Form fields would be auto-filled');
    } else {
      console.log('⚠️ No stored user info found. Try testUserInfoStorage first');
    }
  };

  window.testBookingAssistance = function(serviceType) {
    console.log(`🧪 Testing smart booking assistance for: ${serviceType}`);
    const result = detectChatbotIntent(`I want to book ${serviceType}`);
    console.log('Result:', result);
    if (result.isBooking && result.serviceType) {
      console.log(`✅ Booking detected with service: ${result.serviceType.title}`);
    } else {
      console.log('Result:', result);
    }
  };

  window.testAllIntents = function() {
    console.log('🧪 Testing all new intent patterns:');
    const testCases = [
      { msg: 'I need airfreight express', expects: 'service_specific' },
      { msg: 'My package is damaged', expects: 'complaint_detection' },
      { msg: 'I forgot my password', expects: 'account_authentication' },
      { msg: 'Show me customer reviews', expects: 'testimonials_reviews' },
      { msg: 'Help me book a shipment', expects: 'smart_booking' },
      { msg: 'This is urgent!', expects: 'emergency_urgent' }
    ];

    testCases.forEach(test => {
      const result = detectChatbotIntent(test.msg);
      const passed = result.intent === test.expects;
      console.log(`${passed ? '✅' : '❌'} "${test.msg}" => ${result.intent} (expected: ${test.expects})`);
    });
  };

  window.chatbotDebugInfo = function() {
    console.log('🔍 Chatbot Debug Information:');
    console.log('Current Session:', {
      sessionId: sessionStorage.getItem('chatbot_session'),
      context: getConversationContext(),
      userInfo: getUserInfo()
    });
    console.log('Total Intent Patterns:', Object.keys(INTENT_PATTERNS).length);
    console.log('Service Keywords:', Object.keys(SERVICE_KEYWORDS));
    console.log('Available Testing Functions:');
    console.log('  - testServiceNavigation(serviceName)');
    console.log('  - testComplaintDetection(message)');
    console.log('  - testUrgentDetection(message)');
    console.log('  - testContextMemory()');
    console.log('  - testUserInfoStorage(name, email)');
    console.log('  - testFormAutoFill()');
    console.log('  - testBookingAssistance(serviceType)');
    console.log('  - testAllIntents()');
    console.log('  - chatbotDebugInfo()');
  };

  // Chatbot
  const chatbot = $('#chatbot');
  const closeChatbotBtn = $('#closeChatbot');
  const sendChatBtn = $('#sendChat');
  const chatMessage = $('#chatMessage');
  const chatBody = $('.chat-body');

  // Create chat toggle button if it doesn't exist
  if (!document.getElementById('chatToggleBtn')) {
    const chatToggleBtn = document.createElement('button');
    chatToggleBtn.id = 'chatToggleBtn';
    chatToggleBtn.textContent = '💬 Chat';
    chatToggleBtn.style.position = 'fixed';
    chatToggleBtn.style.bottom = '32px';
    chatToggleBtn.style.right = '32px';
    chatToggleBtn.style.zIndex = '2100';
    chatToggleBtn.style.padding = '12px 24px';
    chatToggleBtn.style.borderRadius = '24px';
    chatToggleBtn.style.background = 'var(--primary-color)';
    chatToggleBtn.style.color = '#fff';
    chatToggleBtn.style.border = 'none';
    chatToggleBtn.style.cursor = 'pointer';
    chatToggleBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    document.body.appendChild(chatToggleBtn);
  }

  const chatToggleBtn = $('#chatToggleBtn');

  if (chatbot) {
    chatbot.style.display = 'none';
    chatbot.style.position = 'fixed';
    chatbot.style.bottom = '100px';
    chatbot.style.right = '32px';
    chatbot.style.zIndex = '2000';
    chatbot.style.maxHeight = '500px';
    chatbot.style.width = '300px';
    chatbot.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
  }

  if (chatToggleBtn) {
    chatToggleBtn.addEventListener('click', () => {
      if (chatbot) {
        const isVisible = chatbot.style.display !== 'none';
        chatbot.style.display = isVisible ? 'none' : 'flex';
        if (!isVisible) {
          chatbot.style.transform = 'translateY(20px)';
          chatbot.style.opacity = '0';
          requestAnimationFrame(() => {
            chatbot.style.transform = 'translateY(0)';
            chatbot.style.opacity = '1';
          });
        }
      }
    });
  }

  // Close chat function
  function closeChatbotPanel() {
    if (chatbot) {
      chatbot.style.transform = 'translateY(20px)';
      chatbot.style.opacity = '0';
      setTimeout(() => chatbot.style.display = 'none', 300);
    }
  }

  if (closeChatbotBtn) {
    closeChatbotBtn.addEventListener('click', closeChatbotPanel);
  }

  // NEW: wire voiceModeToggle button
  const voiceModeToggle = document.getElementById('voiceModeToggle');
  if (voiceModeToggle) {
    voiceModeToggle.addEventListener('click', () => {
      voiceModeEnabled = !voiceModeEnabled;
      voiceModeToggle.textContent = voiceModeEnabled ? 'Voice: On' : 'Voice: Off';
      voiceModeToggle.style.background = voiceModeEnabled ? '#10b981' : '#4f46e5';
      if (!voiceModeEnabled && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    });
  }

  // Decode JWT token from localStorage - used to route chat for verified users
  function decodeJwtToken(token) {
    if (!token) return null;
    try {
      const payload = token.split('.')[1];
      if (!payload) return null;
      // Support standard and URL-safe base64 encodings
      const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
      const json = atob(normalized);
      return JSON.parse(json);
    } catch (e) {
      console.warn('decodeJwtToken failed', e);
      return null;
    }
  }

  function executeChatbotAction(intentData) {
    if (!intentData.action) return;
    
    console.log('🎯 Executing action:', intentData.action);
    
    if (intentData.action === 'openFloatingChat') {
      console.log('📱 Opening floating chat with message:', intentData.actionMessage);
      let message = intentData.actionMessage;
      
      if (intentData.isUrgent && intentData.priority === 'URGENT') {
        console.log('🚨 URGENT flag detected - escalating to priority queue');
        message = intentData.actionMessage;
      }
      
      if (intentData.isComplaint) {
        console.log('⚠️ Complaint detected - routing to specialist');
        message = intentData.actionMessage;
      }
      
      if (intentData.isBooking && intentData.serviceType) {
        console.log('📦 Booking intent with service:', intentData.serviceType.title);
        message += ` (Service: ${intentData.serviceType.title})`;
      }
      
      const userInfo = suggestFormFilling();
      if (userInfo) {
        message += `\n\nI see you've used our services before. Your info: ${userInfo.name} (${userInfo.email})`;
      }
      
      const event = new CustomEvent('openFloatingChatWithMessage', {
        detail: { message: message, priority: intentData.priority, isComplaint: intentData.isComplaint }
      });
      window.dispatchEvent(event);
    } 
    else if (intentData.action === 'clickButton') {
      console.log('🔘 Clicking button:', intentData.buttonSelector);
      const button = document.querySelector(intentData.buttonSelector);
      if (button) {
        console.log('✅ Button found and clicked:', intentData.buttonSelector);
        button.click();
        
        const sectionToNavigate = INTENT_PATTERNS[intentData.intent]?.navigateToSection;
        if (sectionToNavigate) {
          setTimeout(() => {
            navigateToChatbotSection(sectionToNavigate);
          }, 300);
        } else {
          const href = button.getAttribute('href');
          if (href && href.startsWith('#')) {
            setTimeout(() => {
              navigateToChatbotSection(href.substring(1));
            }, 300);
          }
        }
      } else {
        console.error('❌ Button not found:', intentData.buttonSelector);
      }
    }
    else if (intentData.action === 'scrollToService') {
      console.log('🎯 Scroll to service action');
      if (intentData.serviceType) {
        scrollToServiceCard(intentData.serviceType);
      } else {
        navigateToChatbotSection('services');
      }
    }
    else if (intentData.action === 'navigateToAuth') {
      console.log('🔐 Navigate to auth');
      navigateToChatbotSection(intentData.section);
    }
    else if (intentData.action === 'changeLanguage') {
      if (intentData.targetLanguage) {
        console.log('🌍 Changing language to:', intentData.targetLanguage);
        window.changeLanguage(intentData.targetLanguage);
        console.log('✅ Language changed successfully');
      } else {
        console.error('❌ No target language detected');
      }
    }
    else if (intentData.action === 'toggleTheme') {
      console.log('🌓 Toggling theme');
      const themeToggle = document.getElementById('themeToggle');
      if (themeToggle) {
        themeToggle.click();
        const newTheme = themeToggle.checked ? 'Dark' : 'Light';
        console.log(`✅ Theme switched to ${newTheme} mode`);
      } else {
        console.error('❌ Theme toggle button not found');
      }
    }
    
    saveConversationContext(intentData.messageText || '', intentData);
  }

  window.executeChatbotAction = executeChatbotAction;

  // Send message to backend - ALWAYS use /api/chat (Groq endpoint) for all users to ensure AI responses
  async function sendMessageToBackend() {
    if (!chatMessage || !chatBody) return;

    const text = chatMessage.value.trim();
    if (!text) return;

    const userEl = document.createElement('div');
    userEl.className = 'user-message';
    userEl.textContent = text;
    chatBody.appendChild(userEl);
    chatMessage.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;

    try {
      // Use inline NLU for intelligent navigation
      console.log('📨 Message received in sendMessageToBackend:', text);
      const intentData = detectChatbotIntent(text);
      intentData.messageText = text;
      
      console.log('🤖 SwiftDelivery Bot Intent:', {
        intent: intentData.intent,
        confidence: intentData.confidence,
        section: intentData.section,
        shouldNavigate: intentData.shouldNavigate,
        action: intentData.action,
        serviceType: intentData.serviceType,
        isUrgent: intentData.isUrgent,
        isComplaint: intentData.isComplaint,
        isBooking: intentData.isBooking
      });

      saveConversationContext(text, intentData);

      // If action detected (agent, feedback, etc), execute it
      if (intentData.action && intentData.confidence > 0.3) {
        console.log('✅ Action intent detected! Executing action...');
        console.log('📊 Action details:', { action: intentData.action, confidence: intentData.confidence, message: intentData.actionMessage });
        executeChatbotAction(intentData);
      } else if (intentData.action) {
        console.log('⚠️ Action detected but confidence too low:', intentData.confidence, '(need > 0.3)', 'Action:', intentData.action);
      }
      // If high confidence navigation intent, execute scrolling
      else if (intentData.shouldNavigate && intentData.confidence > 0.3) {
        console.log('✅ Confidence check passed! Preparing to navigate...');
        setTimeout(() => {
          console.log('🗺️ Executing navigation to:', intentData.section);
          const navSuccess = navigateToChatbotSection(intentData.section);
          console.log('🗺️ Navigation executed:', {
            success: navSuccess,
            section: intentData.section
          });
        }, 300);
      } else {
        console.log('⚠️ Confidence check FAILED! Confidence:', intentData.confidence, '(need > 0.3)');
      }

      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json'
      };
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      // ALWAYS route to /api/chat for Groq AI responses, regardless of user status
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers,
        body: JSON.stringify({ message: text })
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }

      const data = await response.json();
      const reply = (typeof data.reply === 'string' && data.reply.trim())
        ? data.reply.trim()
        : 'Sorry, I could not process your message.';

      const botEl = document.createElement('div');
      botEl.className = 'bot-message';
      botEl.textContent = reply;
      chatBody.appendChild(botEl);
      chatBody.scrollTop = chatBody.scrollHeight;

      // NEW: speak reply in female voice when voice mode is on
      speakBotReply(reply);
    } catch (error) {
      console.error('Chat error', error);
      const errorEl = document.createElement('div');
      errorEl.className = 'bot-message';
      errorEl.textContent = 'Error: Could not reach the backend. Make sure it is running on port 5000.';
      chatBody.appendChild(errorEl);
      chatBody.scrollTop = chatBody.scrollHeight;

      speakBotReply(errorEl.textContent);
    }
  }

  if (sendChatBtn) {
    sendChatBtn.addEventListener('click', (e) => {
      e.preventDefault();
      sendMessageToBackend();
    });
  }

  if (chatMessage) {
    chatMessage.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessageToBackend();
      }
    });
  }

  // Voice Assistant for Chatbot
  const voiceToggleBtn = $('#voiceToggleBtn');
  const voiceControls = $('#voiceControls');
  const voiceListenBtn = $('#voiceListenBtn');
  const voiceSendBtn = $('#voiceSendBtn');
  let recognition = null;
  let isListening = false;
  let voiceTranscript = '';
  let voiceEnabled = false;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 1;
    
    recognition.onstart = () => {
      isListening = true;
      voiceTranscript = '';
      if (voiceListenBtn) voiceListenBtn.textContent = '🛑 Stop';
      console.log('🎤 Voice recognition started');
    };

    recognition.onresult = (event) => {
      let interim = '';
      let final = '';
      let confidence = 0;
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        const conf = event.results[i][0].confidence;
        
        if (event.results[i].isFinal) {
          final += transcript + ' ';
          confidence = Math.max(confidence, conf);
        } else {
          interim += transcript;
        }
      }
      
      voiceTranscript = (final || interim).trim();
      
      if (voiceTranscript) {
        const displayText = voiceTranscript.charAt(0).toUpperCase() + voiceTranscript.slice(1);
        if (chatMessage) chatMessage.value = displayText;
        if (voiceSendBtn && final) voiceSendBtn.style.display = 'block';
        
        if (final) {
          console.log(`✅ Voice recognized (confidence: ${(confidence * 100).toFixed(0)}%): ${voiceTranscript}`);
        }
      }
    };

    recognition.onend = () => {
      isListening = false;
      if (voiceListenBtn) voiceListenBtn.textContent = '🎤 Speak';
      console.log('🎤 Voice recognition ended');
    };

    recognition.onerror = (event) => {
      console.error('🔴 Voice recognition error:', event.error);
      if (voiceListenBtn) voiceListenBtn.textContent = '🎤 Speak';
      
      let errorMsg = 'Voice recognition error: ';
      switch(event.error) {
        case 'no-speech': errorMsg += 'No speech detected. Please try again.'; break;
        case 'audio-capture': errorMsg += 'No microphone found. Check permissions.'; break;
        case 'network': errorMsg += 'Network error. Check your connection.'; break;
        default: errorMsg += event.error;
      }
      console.warn(errorMsg);
    };
  }

  if (voiceToggleBtn) {
    voiceToggleBtn.addEventListener('click', () => {
      voiceEnabled = !voiceEnabled;
      voiceToggleBtn.style.background = voiceEnabled ? '#10b981' : '#9ca3af';
      voiceToggleBtn.textContent = voiceEnabled ? '🔊 Voice' : '🔇 Voice';

      // When enabling voice input, also auto-enable full voice mode
      if (voiceModeToggle && voiceEnabled) {
        voiceModeEnabled = true;
        voiceModeToggle.textContent = 'Voice: On';
        voiceModeToggle.style.background = '#10b981';
      }

      if (voiceEnabled && voiceControls) {
        voiceControls.style.display = 'flex';
      } else if (voiceControls) {
        voiceControls.style.display = 'none';
      }
      if (voiceSendBtn) voiceSendBtn.style.display = 'none';
      if (chatMessage) chatMessage.value = '';
      if (!voiceEnabled && recognition && isListening) {
        recognition.stop();
      }
      if (!voiceEnabled && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    });
  }

  if (voiceListenBtn && recognition) {
    voiceListenBtn.addEventListener('click', () => {
      if (!voiceEnabled) return;
      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
      }
    });
  }

  if (voiceSendBtn) {
    voiceSendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!chatMessage) return;
      if (chatMessage.value.trim()) {
        sendMessageToBackend();
        voiceSendBtn.style.display = 'none';
        voiceTranscript = '';
      }
    });
  }

  // FAQ
  $$('.faq details').forEach(d => {
    d.addEventListener('toggle', () => d.classList.toggle('open', d.open));
  });

  // Form validation
  $$('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      const required = Array.from(form.querySelectorAll('input[required], textarea[required]'));
      let ok = true;
      for (const el of required) {
        if (!el.value.trim()) {
          el.style.borderColor = 'red';
          ok = false;
        } else {
          el.style.borderColor = '';
        }
      }
      if (!ok) {
        e.preventDefault();
        const first = required.find(i => !i.value.trim());
        if (first) first.focus();
      }
    });
  });

  // Newsletter
  const newsletterForm = $('#newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = $('#newsletterEmail')?.value.trim();
      if (email) {
        alert(`Thanks for subscribing ${email}!`);
        newsletterForm.reset();
      } else {
        alert('Please enter an email.');
      }
    });
  }

  // Register
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('registerUsername')?.value;
      const email = document.getElementById('registerEmail')?.value;
      const password = document.getElementById('registerPassword')?.value;

      try {
        const res = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: name, email, password })
        });
        const data = await res.json();
        if ($('#output')) {
          $('#output').textContent = JSON.stringify(data, null, 2);
        }
      } catch (err) {
        console.error('Register error', err);
        if ($('#output')) {
          $('#output').textContent = 'Error registering. Please try again.';
        }
      }
    });
  }

  // Login
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      try {
        const res = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (data.token) {
          localStorage.setItem('token', data.token);
          if ($('#output')) {
            $('#output').textContent = 'Logged in successfully!';
          }
        } else {
          if ($('#output')) {
            $('#output').textContent = 'Login failed';
          }
        }
      } catch (err) {
        console.error('Login error', err);
        if ($('#output')) {
          $('#output').textContent = 'Login failed';
        }
      }
    });
  }

  // Protected route example
  async function fetchProfile() {
    const token = localStorage.getItem('token');
    if (!token) {
      if ($('#output')) $('#output').textContent = 'No token found. Please login first.';
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if ($('#output')) {
        $('#output').textContent = JSON.stringify(data, null, 2);
      }
    } catch (err) {
      console.error('Profile error', err);
    }
  }

  // Accessibility
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') document.body.classList.add('user-is-tabbing');
  });
  window.addEventListener('mousedown', () => {
    document.body.classList.remove('user-is-tabbing');
  });

  // Reveal on scroll
  const revealElements = $$('section, .card');
  revealElements.forEach(el => {
    el.style.transition = 'opacity 0.8s cubic-bezier(0.77, 0, 0.175, 1), transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)';
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
  });

  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Initialize frontend tracking map with default location
  initFrontendTrackingMap();

  // Initial fade-in
  requestAnimationFrame(() => document.body.style.opacity = '1');
});

const API_BASE_URL = 'http://localhost:5000';
let trackingModalMap = null;
let trackingModalMarker = null;
let courierAnimationMarker = null;
let courierAnimationInterval = null;
let currentMapView = 'satellite';
let pathPolyline = null;
let frontendTrackingMap = null;

function initFrontendTrackingMap() {
  const mapContainer = document.getElementById('trackingMap');
  if (!mapContainer || frontendTrackingMap) return;

  try {
    frontendTrackingMap = L.map(mapContainer).setView([6.5244, 3.3792], 6);

    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    });

    osm.addTo(frontendTrackingMap);

    L.marker([6.5244, 3.3792], {
      icon: L.icon({
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgZmlsbD0iIzRmNDZlNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIxMiIgeT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNmZmYiIGZvbnQtd2VpZ2h0PSJib2xkIj7inJI8L3RleHQ+PC9zdmc+',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
      })
    }).addTo(frontendTrackingMap).bindPopup('<b>SwiftDelivery Hub</b><br/>Nigeria, West Africa');

    setTimeout(() => {
      frontendTrackingMap.invalidateSize();
    }, 100);
  } catch (err) {
    console.warn('Frontend map initialization failed:', err);
  }
}

function initTrackingModalMap() {
  const mapContainer = document.getElementById('trackingModalMap');
  if (!mapContainer) return;

  if (trackingModalMap) {
    setTimeout(() => {
      trackingModalMap.invalidateSize();
    }, 100);
    return;
  }

  trackingModalMap = L.map(mapContainer).setView([6.5244, 3.3792], 13);

  const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© Esri',
    maxZoom: 18,
    name: 'Satellite'
  });

  const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19,
    name: 'Street Map'
  });

  satellite.addTo(trackingModalMap);
  L.control.layers({ 'Satellite': satellite, 'Street Map': osm }, {}, { position: 'topright' }).addTo(trackingModalMap);

  setTimeout(() => {
    trackingModalMap.invalidateSize();
  }, 100);
}

function animateMapZoom(targetZoom = 14) {
  if (!trackingModalMap) return;
  trackingModalMap.setZoom(10);
  let currentZoom = 10;
  const zoomInterval = setInterval(() => {
    if (currentZoom >= targetZoom) {
      clearInterval(zoomInterval);
      return;
    }
    currentZoom += 1;
    trackingModalMap.setZoom(currentZoom);
  }, 100);
}

function getCourierMarkerIcon(status) {
  const colorMap = {
    'Pending Pickup': '#f59e0b',
    'Pickup Assigned': '#3b82f6',
    'Pickup Accepted': '#10b981',
    'Enroute to Facility': '#8b5cf6',
    'Arrived at Hub or Facility': '#6366f1',
    'In Transit': '#06b6d4',
    'Out for Delivery': '#f97316',
    'Delivered': '#22c55e',
    'Awaiting Receipt': '#14b8a6',
    'Delivery Failed': '#ef4444',
    'Returned to Sender': '#64748b'
  };
  const color = colorMap[status] || '#9ca3af';

  return L.divIcon({
    html: `<div style="background-color: ${color}; width: 36px; height: 36px; border-radius: 50%; border: 3px solid white; box-shadow: 0 3px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-size: 18px; transition: all 0.3s ease;">📦</div>`,
    iconSize: [42, 42],
    className: 'package-marker'
  });
}

function getActiveCourierIcon() {
  return L.divIcon({
    html: `<div style="animation: bounce 1s infinite; background-color: #4f46e5; width: 32px; height: 32px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 2px #4f46e5, 0 3px 8px rgba(79, 70, 229, 0.4); display: flex; align-items: center; justify-content: center; font-size: 16px;">🚚</div>`,
    iconSize: [38, 38],
    className: 'courier-marker courier-marker-active'
  });
}

function animateCourierAlongPath(location, endLocation) {
  if (courierAnimationInterval) clearInterval(courierAnimationInterval);
  if (courierAnimationMarker) trackingModalMap.removeLayer(courierAnimationMarker);
  if (pathPolyline) trackingModalMap.removeLayer(pathPolyline);

  const startLat = location.lat;
  const startLng = location.lng;
  const endLat = endLocation?.lat || startLat;
  const endLng = endLocation?.lng || startLng;

  const path = [[startLat, startLng], [endLat, endLng]];
  
  pathPolyline = L.polyline(path, {
    color: '#4f46e5',
    weight: 4,
    opacity: 0.7,
    lineCap: 'round',
    lineJoin: 'round'
  }).addTo(trackingModalMap);

  pathPolyline.bringToFront();

  courierAnimationMarker = L.marker([startLat, startLng], {
    icon: getActiveCourierIcon(),
    zIndexOffset: 1000
  }).addTo(trackingModalMap);

  const steps = 150;
  let currentStep = 0;

  courierAnimationInterval = setInterval(() => {
    currentStep++;
    const progress = currentStep / steps;

    if (progress >= 1) {
      clearInterval(courierAnimationInterval);
      courierAnimationMarker.setLatLng([endLat, endLng]);
      return;
    }

    const interpolatedLat = startLat + (endLat - startLat) * progress;
    const interpolatedLng = startLng + (endLng - startLng) * progress;

    courierAnimationMarker.setLatLng([interpolatedLat, interpolatedLng]);
  }, 30);
}

function toggleTrackingMapView() {
  if (!trackingModalMap) return;
  const layers = trackingModalMap._layers;
  const satelliteLayer = Object.values(layers).find(layer => layer.options?.name === 'Satellite');
  const streetLayer = Object.values(layers).find(layer => layer.options?.name === 'Street Map');

  if (currentMapView === 'satellite') {
    if (satelliteLayer) trackingModalMap.removeLayer(satelliteLayer);
    if (streetLayer) trackingModalMap.addLayer(streetLayer);
    currentMapView = 'street';
    document.querySelector('.satellite-toggle').textContent = '🗺️ Street';
  } else {
    if (streetLayer) trackingModalMap.removeLayer(streetLayer);
    if (satelliteLayer) trackingModalMap.addLayer(satelliteLayer);
    currentMapView = 'satellite';
    document.querySelector('.satellite-toggle').textContent = '🛰️ Satellite';
  }
  
  setTimeout(() => {
    trackingModalMap.invalidateSize();
  }, 50);
}

function openTrackingModal(trackingData) {
  const modal = document.getElementById('trackingModalOverlay');
  if (!modal) return;

  modal.classList.add('active');
  modal.setAttribute('style', 'display: flex !important; visibility: visible !important; opacity: 1 !important; pointer-events: auto !important;');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    initTrackingModalMap();
  }, 50);

  document.getElementById('modalTrackingId').textContent = trackingData.trackingId;
  document.getElementById('modalStatus').textContent = trackingData.status;
  document.getElementById('modalRecipient').textContent = trackingData.user?.fullName || '-';
  document.getElementById('modalEmail').textContent = trackingData.user?.email || '-';
  document.getElementById('modalLocation').textContent = `${trackingData.location.lat.toFixed(4)}, ${trackingData.location.lng.toFixed(4)}`;
  document.getElementById('modalUpdated').textContent = new Date(trackingData.updatedAt).toLocaleString();

  const statusBadgeEl = document.getElementById('modalStatusBadge');
  let badgeClass = 'delivered';
  if (['Out for Delivery', 'In Transit', 'Enroute to Facility'].includes(trackingData.status)) {
    badgeClass = 'in-transit';
  } else if (['Pending Pickup', 'Pickup Assigned'].includes(trackingData.status)) {
    badgeClass = 'pending';
  } else if (trackingData.status === 'Delivery Failed') {
    badgeClass = 'failed';
  }
  statusBadgeEl.className = `status-badge ${badgeClass}`;
  statusBadgeEl.textContent = trackingData.status;

  setTimeout(() => {
    if (trackingModalMarker) trackingModalMap.removeLayer(trackingModalMarker);

    const location = [trackingData.location.lat, trackingData.location.lng];
    trackingModalMarker = L.marker(location, { icon: getCourierMarkerIcon(trackingData.status) }).addTo(trackingModalMap);
    trackingModalMarker.bindPopup(`<strong>${trackingData.user?.fullName || 'Package'}</strong><br/>Status: ${trackingData.status}<br/>ID: ${trackingData.trackingId}`).openPopup();

    trackingModalMap.setView(location, 14);
    trackingModalMap.invalidateSize();
    animateMapZoom(14);

    const activeStatuses = ['Out for Delivery', 'In Transit', 'Enroute to Facility'];
    if (activeStatuses.includes(trackingData.status)) {
      setTimeout(() => {
        const offsetLat = trackingData.location.lat + 0.003;
        const offsetLng = trackingData.location.lng + 0.003;
        animateCourierAlongPath(trackingData.location, { lat: offsetLat, lng: offsetLng });
      }, 400);
    }
  }, 250);

  setTimeout(() => {
    renderTrackingTimeline(trackingData);
    renderEventLog(trackingData);
    setupEventLogToggle();
  }, 300);

  currentMapView = 'satellite';
}

function closeTrackingModal() {
  const modal = document.getElementById('trackingModalOverlay');
  if (!modal) return;

  stopAutoRefresh();
  modal.classList.remove('active');
  modal.setAttribute('style', 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important;');
  document.body.style.overflow = '';

  if (courierAnimationInterval) clearInterval(courierAnimationInterval);
  if (courierAnimationMarker && trackingModalMap) trackingModalMap.removeLayer(courierAnimationMarker);
  if (pathPolyline && trackingModalMap) trackingModalMap.removeLayer(pathPolyline);
  if (trackingModalMarker && trackingModalMap) trackingModalMap.removeLayer(trackingModalMarker);
}

function attachTrackingModalListeners() {
  const trackingForm = document.getElementById('trackingForm');
  if (trackingForm) {
    trackingForm.removeEventListener('submit', handleTrackingFormSubmit);
    trackingForm.addEventListener('submit', handleTrackingFormSubmit);
  }

  const closeBtn = document.getElementById('closeTrackingModal');
  if (closeBtn) {
    closeBtn.removeEventListener('click', closeTrackingModal);
    closeBtn.addEventListener('click', closeTrackingModal);
  }

  const closeModalBtn = document.getElementById('closeModalButton');
  if (closeModalBtn) {
    closeModalBtn.removeEventListener('click', closeTrackingModal);
    closeModalBtn.addEventListener('click', closeTrackingModal);
  }

  const modalOverlay = document.getElementById('trackingModalOverlay');
  if (modalOverlay) {
    modalOverlay.removeEventListener('click', handleOverlayClick);
    modalOverlay.addEventListener('click', handleOverlayClick);
  }

  const clearBtn = document.getElementById('clearTrackingBtn');
  if (clearBtn) {
    clearBtn.removeEventListener('click', clearTrackingSearch);
    clearBtn.addEventListener('click', clearTrackingSearch);
  }
}

function clearTrackingSearch() {
  const trackingInfo = document.getElementById('trackingInfo');
  if (trackingInfo) {
    trackingInfo.style.display = 'none';
  }
  const trackingIdInput = document.getElementById('trackingIdInput');
  if (trackingIdInput) {
    trackingIdInput.value = '';
  }
}

function showTrackingLoadingSpinner() {
  const trackingForm = document.getElementById('trackingForm');
  let spinner = document.getElementById('trackingLoadingSpinner');
  
  if (!spinner) {
    spinner = document.createElement('div');
    spinner.id = 'trackingLoadingSpinner';
    spinner.className = 'tracking-spinner';
    spinner.style.marginTop = '10px';
    trackingForm.appendChild(spinner);
  }
  spinner.style.display = 'block';
}

function hideTrackingLoadingSpinner() {
  const spinner = document.getElementById('trackingLoadingSpinner');
  if (spinner) spinner.style.display = 'none';
}

function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const iconMap = {
    success: '✓',
    error: '✗',
    warning: '⚠',
    info: 'ℹ'
  };
  
  toast.innerHTML = `
    <span class="toast-icon">${iconMap[type]}</span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('remove');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function renderTrackingTimeline(trackingData) {
  const timelineContainer = document.getElementById('timelineContainer');
  const trackingTimeline = document.getElementById('trackingTimeline');
  
  if (!timelineContainer || !trackingTimeline) return;
  
  const milestones = [
    { label: 'Pickup', icon: '📦', status: 'completed', time: trackingData.createdAt },
    { label: 'In Transit', icon: '✈️', status: trackingData.status === 'In Transit' ? 'current' : trackingData.status !== 'Pending Pickup' ? 'completed' : 'pending', time: null },
    { label: 'Out for Delivery', icon: '🚚', status: trackingData.status === 'Out for Delivery' ? 'current' : trackingData.status === 'Delivered' ? 'completed' : 'pending', time: null },
    { label: 'Delivered', icon: '✅', status: trackingData.status === 'Delivered' ? 'completed' : 'pending', time: trackingData.deliveredAt || null }
  ];
  
  timelineContainer.innerHTML = '';
  
  milestones.forEach((milestone, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.style.animationDelay = `${index * 0.1}s`;
    
    const marker = document.createElement('div');
    marker.className = `timeline-marker ${milestone.status}`;
    marker.textContent = milestone.icon;
    
    const content = document.createElement('div');
    content.className = 'timeline-content';
    
    const label = document.createElement('div');
    label.className = 'timeline-label';
    label.textContent = milestone.label;
    
    const time = document.createElement('div');
    time.className = 'timeline-time';
    time.textContent = milestone.time ? new Date(milestone.time).toLocaleDateString() : '-';
    
    content.appendChild(label);
    content.appendChild(time);
    
    timelineItem.appendChild(marker);
    timelineItem.appendChild(content);
    timelineContainer.appendChild(timelineItem);
  });
  
  const progress = calculateDeliveryProgress(trackingData.status);
  animateProgressBar(progress);
  
  trackingTimeline.style.display = 'block';
}

function calculateDeliveryProgress(status) {
  const statusMap = {
    'Pending Pickup': 10,
    'Pickup Assigned': 20,
    'In Transit': 50,
    'Out for Delivery': 80,
    'Delivered': 100,
    'Delivery Failed': 50
  };
  return statusMap[status] || 0;
}

function animateProgressBar(targetProgress) {
  const progressBar = document.getElementById('modalProgressBar');
  if (!progressBar) return;
  
  let currentProgress = 0;
  const increment = targetProgress / 30;
  
  const interval = setInterval(() => {
    currentProgress += increment;
    if (currentProgress >= targetProgress) {
      currentProgress = targetProgress;
      clearInterval(interval);
    }
    progressBar.style.width = currentProgress + '%';
  }, 30);
}

function renderEventLog(trackingData) {
  const eventLogContainer = document.getElementById('eventLogContainer');
  const eventLogItems = document.getElementById('eventLogItems');
  
  if (!eventLogContainer || !eventLogItems) return;
  
  const events = [
    { title: 'Order Confirmed', icon: '✓', time: trackingData.createdAt, location: 'System' },
    { title: 'Pickup Scheduled', icon: '📅', time: trackingData.createdAt, location: trackingData.origin || 'Origin' },
    { title: 'In Transit', icon: '✈️', time: null, location: 'Enroute' },
    { title: 'Arrived at Hub', icon: '🏢', time: null, location: 'Distribution Center' },
    { title: 'Out for Delivery', icon: '🚚', time: null, location: trackingData.destination || 'Delivery Location' },
    { title: 'Delivered', icon: '✅', time: trackingData.deliveredAt, location: trackingData.user?.fullName || 'Recipient' }
  ];
  
  eventLogItems.innerHTML = '';
  
  events.forEach(event => {
    if (event.time || event.title === 'Out for Delivery' || event.title === 'In Transit') {
      const eventItem = document.createElement('div');
      eventItem.className = 'event-log-item';
      
      eventItem.innerHTML = `
        <span class="event-log-icon">${event.icon}</span>
        <div class="event-log-details">
          <div class="event-log-title">${event.title}</div>
          <div class="event-log-time">${event.time ? new Date(event.time).toLocaleString() : 'In Progress'}</div>
          <div class="event-log-location">📍 ${event.location}</div>
        </div>
      `;
      
      eventLogItems.appendChild(eventItem);
    }
  });
  
  eventLogContainer.style.display = 'block';
}

function setupEventLogToggle() {
  const eventLogHeader = document.getElementById('eventLogHeader');
  const eventLogItems = document.getElementById('eventLogItems');
  const eventLogToggle = document.getElementById('eventLogToggle');
  
  if (!eventLogHeader) return;
  
  eventLogHeader.addEventListener('click', () => {
    const isCollapsed = eventLogItems.classList.contains('collapsed');
    
    if (isCollapsed) {
      eventLogItems.classList.remove('collapsed');
      eventLogToggle.classList.add('expanded');
    } else {
      eventLogItems.classList.add('collapsed');
      eventLogToggle.classList.remove('expanded');
    }
  });
}

let autoRefreshInterval = null;
let lastTrackingStatus = null;
let currentTrackingId = null;

function startAutoRefresh(trackingId) {
  currentTrackingId = trackingId;
  if (autoRefreshInterval) clearInterval(autoRefreshInterval);
  
  autoRefreshInterval = setInterval(() => {
    refreshTrackingData(trackingId);
  }, 5000);
}

function stopAutoRefresh() {
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval);
    autoRefreshInterval = null;
  }
}

function refreshTrackingData(trackingId) {
  if (!trackingId) return;
  
  fetch(`${API_BASE_URL}/api/tracking/${trackingId}`)
    .then(res => {
      if (!res.ok) throw new Error('Tracking data unavailable');
      return res.json();
    })
    .then(data => {
      if (data.status !== lastTrackingStatus) {
        lastTrackingStatus = data.status;
        showToast(`📍 Status Updated: ${data.status}`, 'info');
        updateTrackingDisplay(data);
      }
    })
    .catch(err => {
      console.error('Auto-refresh error:', err);
    });
}

function updateTrackingDisplay(trackingData) {
  document.getElementById('modalStatus').textContent = trackingData.status;
  document.getElementById('modalLocation').textContent = `${trackingData.location.lat.toFixed(4)}, ${trackingData.location.lng.toFixed(4)}`;
  document.getElementById('modalUpdated').textContent = new Date(trackingData.updatedAt).toLocaleString();
  
  const statusBadgeEl = document.getElementById('modalStatusBadge');
  let badgeClass = 'delivered';
  if (['Out for Delivery', 'In Transit', 'Enroute to Facility'].includes(trackingData.status)) {
    badgeClass = 'in-transit';
  } else if (['Pending Pickup', 'Pickup Assigned'].includes(trackingData.status)) {
    badgeClass = 'pending';
  } else if (trackingData.status === 'Delivery Failed') {
    badgeClass = 'failed';
  }
  statusBadgeEl.className = `status-badge ${badgeClass}`;
  statusBadgeEl.textContent = trackingData.status;
  
  if (trackingModalMarker) trackingModalMap.removeLayer(trackingModalMarker);
  const location = [trackingData.location.lat, trackingData.location.lng];
  trackingModalMarker = L.marker(location, { icon: getCourierMarkerIcon(trackingData.status) }).addTo(trackingModalMap);
  trackingModalMarker.bindPopup(`<strong>${trackingData.user?.fullName || 'Package'}</strong><br/>Status: ${trackingData.status}<br/>ID: ${trackingData.trackingId}`).openPopup();
  
  renderTrackingTimeline(trackingData);
  renderEventLog(trackingData);
  
  const progress = calculateDeliveryProgress(trackingData.status);
  animateProgressBar(progress);
  
  if (trackingData.status === 'Delivered') {
    stopAutoRefresh();
    showToast('✓ Package Delivered!', 'success');
  }
}

function handleTrackingFormSubmit(e) {
  e.preventDefault();
  const trackingId = document.getElementById('trackingIdInput').value.trim();
  const trackingForm = document.getElementById('trackingForm');
  const trackBtn = trackingForm.querySelector('button[type="submit"]');

  if (!trackingId) return;

  trackBtn.classList.add('pulse-btn');
  trackBtn.disabled = true;
  trackBtn.textContent = '🔄 Loading...';
  
  showTrackingLoadingSpinner();

  fetch(`${API_BASE_URL}/api/tracking/${trackingId}`)
    .then(res => {
      if (!res.ok) throw new Error('Tracking ID not found');
      return res.json();
    })
    .then(data => {
      openTrackingModal(data);
      lastTrackingStatus = data.status;
      startAutoRefresh(trackingId);
      showToast('✓ Tracking data loaded successfully!', 'success');
      document.getElementById('trackingIdInput').value = '';
    })
    .catch(err => {
      showToast('✗ ' + (err.message || 'Failed to retrieve tracking information'), 'error');
    })
    .finally(() => {
      trackBtn.classList.remove('pulse-btn');
      trackBtn.disabled = false;
      trackBtn.textContent = '🔍 Track Shipment';
      hideTrackingLoadingSpinner();
    });
}

function handleOverlayClick(e) {
  if (e.target === this) {
    closeTrackingModal();
  }
}

document.addEventListener('DOMContentLoaded', attachTrackingModalListeners);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachTrackingModalListeners);
} else {
  attachTrackingModalListeners();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('trackingModalOverlay');
    if (modal && modal.classList.contains('active')) {
      closeTrackingModal();
    }
    const messaging = document.getElementById('messagingSystemOverlay');
    if (messaging && messaging.classList.contains('active')) {
      closeMessaging();
    }
  }
});

let conversationMessages = [];

// Messaging system
function isUserLoggedIn() {
  return !!localStorage.getItem('token');
}

function openMessaging() {
  if (!isUserLoggedIn()) {
    return;
  }
  
  const overlay = document.getElementById('messagingSystemOverlay');
  if (overlay) {
    overlay.classList.add('active');
    document.getElementById('agentStatus').textContent = 'Agent is online';
    const input = document.getElementById('messageInput');
    if (input) {
      input.focus();
    }
  }
}

function closeMessaging() {
  const overlay = document.getElementById('messagingSystemOverlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
  
  if (window.messageInterval) {
    clearInterval(window.messageInterval);
    window.messageInterval = null;
  }
}

const originalOpenMessaging = openMessaging;
openMessaging = function() {
  originalOpenMessaging();
  fetchMessages();
  if (!window.messageInterval) {
    window.messageInterval = setInterval(fetchMessages, 5000);
  }
};

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

function sendMessage(text) {
  if (!text.trim()) return;

  const messagingBody = document.getElementById('messagingBody');
  const messageItem = document.createElement('div');
  messageItem.className = 'message-item customer';

  const timeSent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  messageItem.innerHTML = `
    <div>
      <div class="message-bubble">${escapeHtml(text)}</div>
      <div class="message-time">${timeSent} - sent</div>
    </div>
  `;

  messagingBody.appendChild(messageItem);
  messagingBody.scrollTop = messagingBody.scrollHeight;

  conversationMessages.push({
    type: 'customer',
    text: text,
    timestamp: new Date()
  });

  const token = localStorage.getItem('token');
  if (!token) return;

  fetch(`${API_BASE_URL}/api/messages/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ text })
  }).catch(err => {
    console.error('Error sending message:', err);
  });
}

async function fetchMessages() {
  const token = localStorage.getItem('token');
  if (!token) return;

  try {
    const res = await fetch(`${API_BASE_URL}/api/messages/conversation`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!res.ok) throw new Error('Failed to fetch messages');

    const data = await res.json();
    const messages = data.messages || [];

    const messagingBody = document.getElementById('messagingBody');
    if (!messagingBody) return;

    messagingBody.innerHTML = '';

    messages.forEach(msg => {
      const messageItem = document.createElement('div');
      messageItem.className = `message-item ${msg.senderType === 'admin' ? 'admin' : 'customer'}`;
      const timeSent = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const statusText = msg.senderType === 'admin'
        ? (msg.status === 'delivered' ? 'delivered' : 'sent')
        : 'sent';

      messageItem.innerHTML = `
        <div>
          <div class="message-bubble">${escapeHtml(msg.text)}</div>
          <div class="message-time">${timeSent} - ${statusText}</div>
        </div>
      `;

      messagingBody.appendChild(messageItem);
    });

    messagingBody.scrollTop = messagingBody.scrollHeight;
  } catch (err) {
    console.error('Error fetching messages:', err);
  }
}

function attachMessagingListeners() {
  const openMessagingBtn = document.getElementById('openMessagingBtn');
  if (openMessagingBtn) {
    openMessagingBtn.addEventListener('click', openMessaging);
  }

  const closeMessagingBtn = document.getElementById('closeMessagingBtn');
  if (closeMessagingBtn) {
    closeMessagingBtn.addEventListener('click', closeMessaging);
  }

  const messageForm = document.getElementById('messageForm');
  if (messageForm) {
    messageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('messageInput');
      if (!input) return;
      const text = input.value.trim();
      if (!text) return;
      sendMessage(text);
      input.value = '';
    });
  }

  const floatingBtn = document.getElementById('floatingMessagingBtn');
  if (floatingBtn) {
    floatingBtn.addEventListener('click', openMessaging);
  }
}

function updateMessagingButtonVisibility() {
  const floatingBtn = document.getElementById('floatingMessagingBtn');
  if (!floatingBtn) return;

  if (isUserLoggedIn()) {
    floatingBtn.classList.add('visible');
  } else {
    floatingBtn.classList.remove('visible');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachMessagingListeners);
} else {
  attachMessagingListeners();
}

setInterval(() => {
  updateMessagingButtonVisibility();
}, 1000);
