import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, HelpCircle, Clock, CheckCircle } from 'lucide-react';

const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    alert('Merci de nous avoir contactés ! Nous vous répondrons sous 24 heures.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const faqs = [
    {
      question: 'Qu’est-ce qui distingue les produits Hbio des autres marques de soins naturels ?',
      answer: 'Nos formules reposent sur un procédé d’extraction à froid exclusif qui préserve toute la puissance des ingrédients botaniques. Chaque produit est testé dermatologiquement et élaboré à partir d’ingrédients premium issus du commerce équitable.'
    },
    {
      question: 'Vos produits conviennent-ils aux peaux sensibles ?',
      answer: 'Oui, toutes nos formules sont pensées pour respecter les peaux sensibles. Nous recommandons toutefois un test cutané préalable. Pour toute préoccupation spécifique, demandez l’avis de votre dermatologue.'
    },
    {
      question: 'Quelle est la durée de conservation après ouverture ?',
      answer: 'Une fois ouverts, nos soins se conservent généralement 12 à 18 mois s’ils sont stockés dans un endroit frais et sec. Reportez-vous au pictogramme « période après ouverture » figurant sur l’emballage.'
    },
    {
      question: 'Testez-vous vos produits sur les animaux ?',
      answer: 'Absolument pas. Hbio est une marque 100 % cruelty-free et certifiée Leaping Bunny. Nous privilégions des méthodes alternatives pour garantir la sécurité de nos soins.'
    },
    {
      question: 'Quelle est votre politique de retour ?',
      answer: 'Vous disposez d’une garantie satisfait ou remboursé sous 30 jours. Si vous n’êtes pas satisfait, retournez le produit (au moins à moitié plein) pour un remboursement intégral.'
    },
    {
      question: 'Comment conserver mes produits Hbio ?',
      answer: 'Rangez-les dans un endroit frais et sec, à l’abri du soleil. Certaines huiles visage peuvent être placées au réfrigérateur pour prolonger leur fraîcheur et offrir un effet rafraîchissant à l’application.'
    },
    {
      question: 'Puis-je combiner plusieurs produits Hbio ?',
      answer: 'Oui, nos soins sont conçus pour fonctionner en synergie. Introduisez toutefois un produit à la fois dans votre routine afin de vérifier la bonne tolérance de votre peau.'
    },
    {
      question: 'Livrez-vous à l’international ?',
      answer: 'Actuellement, nous livrons uniquement au Maroc.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comment pouvons-nous vous aider ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes à vos côtés pour accompagner votre routine beauté naturelle. Consultez les réponses aux questions fréquentes ou contactez directement notre équipe.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <MessageCircle className="h-8 w-8" />,
              title: 'Chat en direct',
              description: 'Discutez avec notre équipe support',
              detail: 'Disponible du lundi au vendredi, 9h-18h ',
              action: 'Démarrer le chat'
            },
            {
              icon: <Phone className="h-8 w-8" />,
              title: 'Assistance téléphonique',
              description: 'Parlez directement à notre équipe',
              detail: '0661552515 HBIO-HELP',
              action: 'Appeler maintenant'
            },
            {
              icon: <Mail className="h-8 w-8" />,
              title: 'Support par e-mail',
              description: 'Envoyez-nous un message détaillé',
              detail: 'support@hbio.com',
              action: 'Envoyer un e-mail'
            }
          ].map((option, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-2">
                {option.description}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {option.detail}
              </p>
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200">
                {option.action}
              </button>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'faq', label: 'FAQ', icon: <HelpCircle className="h-5 w-5" /> },
                { id: 'contact', label: 'Formulaire de contact', icon: <Mail className="h-5 w-5" /> },
                { id: 'orders', label: 'Suivi de commande', icon: <CheckCircle className="h-5 w-5" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'faq' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="text-emerald-600 group-open:rotate-180 transition-transform duration-200">
                          ▼
                        </span>
                      </summary>
                      <div className="p-4 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse e-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="votre.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Choisissez un sujet</option>
                      <option value="product-question">Question produit</option>
                      <option value="order-issue">Problème de commande</option>
                      <option value="shipping">Question d’expédition</option>
                      <option value="return">Retour/échange</option>
                      <option value="ingredient-info">Information sur un ingrédient</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Merci de préciser votre question ou votre demande..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Consultez le statut de votre commande</h2>
                <div className="max-w-md">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="order-number" className="block text-sm font-medium text-gray-700 mb-2">
                        Numéro de commande
                      </label>
                      <input
                        type="text"
                        id="order-number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="ex. : HB-123456789"
                      />
                    </div>
                    <div>
                      <label htmlFor="order-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse e-mail
                      </label>
                      <input
                        type="email"
                        id="order-email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="E-mail utilisé lors de la commande"
                      />
                    </div>
                    <button className="w-full px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200">
                      Suivre la commande
                    </button>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-blue-800 font-medium">Délais de traitement</span>
                  </div>
                  <ul className="mt-2 text-blue-700 text-sm space-y-1">
                    <li>• Les commandes sont traitées en moyenne sous 1 à 2 jours ouvrés</li>
                    <li>• L’expédition standard prend 3 à 5 jours ouvrés</li>
                    <li>• L’expédition express prend 1 à 2 jours ouvrés</li>
                    <li>• Vous recevrez un numéro de suivi par e-mail dès l’expédition</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;