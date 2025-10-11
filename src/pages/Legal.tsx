import React, { useState } from 'react';
import { Shield, FileText, Eye, CreditCard } from 'lucide-react';

const Legal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Informations légales
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre confiance et votre confidentialité sont essentielles. Retrouvez nos politiques pour comprendre comment nous protégeons vos données et garantissons une expérience d’achat sereine.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'privacy', label: 'Politique de confidentialité', icon: <Shield className="h-5 w-5" /> },
                { id: 'terms', label: 'Conditions d’utilisation', icon: <FileText className="h-5 w-5" /> },
                { id: 'returns', label: 'Politique de retour', icon: <Eye className="h-5 w-5" /> },
                { id: 'payment', label: 'Conditions de paiement', icon: <CreditCard className="h-5 w-5" /> }
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

          <div className="p-8">
            {activeTab === 'privacy' && (
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Politique de confidentialité</h2>
                <p className="text-gray-600 mb-4">Dernière mise à jour : 11 October 2025</p>
                
                <div className="space-y-6">
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Informations que nous collectons</h3>
                    <p className="text-gray-700 mb-3">Nous collectons les informations que vous nous transmettez directement, notamment lorsque vous :</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Créez un compte ou effectuez un achat</li>
                      <li>Vous inscrivez à notre newsletter</li>
                      <li>Contactez notre service client</li>
                      <li>Participez à des enquêtes ou promotions</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Utilisation de vos données</h3>
                    <p className="text-gray-700 mb-3">Nous utilisons ces informations pour :</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Traiter vos commandes et paiements</li>
                      <li>Vous envoyer confirmations et informations d’expédition</li>
                      <li>Assurer le support client</li>
                      <li>Vous adresser des communications marketing (avec votre accord)</li>
                      <li>Améliorer nos produits et services</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Partage des informations</h3>
                    <p className="text-gray-700">
                      Nous ne vendons ni ne louons vos données personnelles. Elles peuvent être partagées avec des prestataires de confiance qui nous aident à exploiter notre site et à assurer nos services, conformément à cette politique.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Sécurité des données</h3>
                    <p className="text-gray-700">
                      Nous appliquons des mesures de sécurité adaptées pour protéger vos données contre tout accès, modification ou divulgation non autorisés. Néanmoins, aucun mode de transmission sur Internet n’est garanti à 100 %.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Nous contacter</h3>
                    <p className="text-gray-700">
                      Pour toute question relative à cette politique de confidentialité, écrivez-nous à privacy@hbio.com.
                    </p>
                  </section>
                </div>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Conditions d’utilisation</h2>
                <p className="text-gray-600 mb-4">Dernière mise à jour : 11 October 2025</p>
                
                <div className="space-y-6">
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Acceptation des conditions</h3>
                    <p className="text-gray-700">
                      En accédant à ce site, vous acceptez d’être lié par les présentes conditions. Elles s’appliquent à l’ensemble des visiteurs, utilisateurs et toute personne accédant au service.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Licence d’utilisation</h3>
                    <p className="text-gray-700 mb-3">Il vous est accordé une licence limitée vous permettant de télécharger temporairement une copie des contenus du site Hbio pour un usage personnel et non commercial. Cette licence n’emporte aucun transfert de propriété et ne vous autorise pas à :</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Modifier ou reproduire les contenus</li>
                      <li>Utiliser les contenus à des fins commerciales ou pour un affichage public</li>
                      <li>Tenter de décompiler ou rétroconcevoir tout logiciel du site</li>
                      <li>Supprimer les mentions de droits d’auteur ou de propriété</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Informations produits</h3>
                    <p className="text-gray-700">
                      Nous nous efforçons de fournir des descriptions précises de nos produits. Toutefois, nous ne garantissons pas l’absence d’erreurs ou d’imprécisions dans ces informations.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitation de responsabilité</h3>
                    <p className="text-gray-700">
                      Hbio et ses fournisseurs ne pourront être tenus responsables de tout dommage résultant de l’utilisation ou de l’impossibilité d’utiliser les contenus du site, y compris toute perte de données ou de profit.
                    </p>
                  </section>
                </div>
              </div>
            )}

            {activeTab === 'returns' && (
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Politique de retour & d’échange</h2>
                <p className="text-gray-600 mb-4">Dernière mise à jour : 11 October 2025</p>
                
                <div className="space-y-6">
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Garantie satisfait ou remboursé 30 jours</h3>
                    <p className="text-gray-700">
                      Votre satisfaction est notre priorité. Si votre achat ne vous convient pas, vous pouvez le renvoyer dans les 30 jours suivant la livraison pour un remboursement intégral.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Conditions de retour</h3>
                    <p className="text-gray-700 mb-3">Pour être éligible, votre produit doit :</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Être au minimum rempli à 50 % (pour des raisons d’hygiène)</li>
                      <li>Être dans son emballage d’origine</li>
                      <li>Être renvoyé sous 30 jours après livraison</li>
                      <li>Être accompagné du reçu ou de l’e-mail de confirmation</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Procédure de retour</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Étape 1 :</strong> Contactez notre service client à returns@hbio.com ou au 0661552515-HBIO-HELP</p>
                      <p><strong>Étape 2 :</strong> Nous vous enverrons une étiquette de retour prépayée</p>
                      <p><strong>Étape 3 :</strong> Emballez soigneusement votre produit et apposez l’étiquette</p>
                      <p><strong>Étape 4 :</strong> Déposez le colis dans un point d’envoi agréé</p>
                      <p><strong>Étape 5 :</strong> Nous traiterons votre remboursement sous 5 à 7 jours ouvrés après réception</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Échanges</h3>
                    <p className="text-gray-700">
                      Nous n’effectuons pas d’échanges directs. Retournez votre produit pour obtenir un remboursement puis passez une nouvelle commande pour l’article souhaité.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Articles non retournables</h3>
                    <p className="text-gray-700 mb-3">Pour des raisons d’hygiène, nous n’acceptons pas les retours pour :</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Les produits contenant moins de 50 %</li>
                      <li>Les articles détériorés suite à une mauvaise utilisation</li>
                      <li>Les retours effectués après 30 jours</li>
                    </ul>
                  </section>
                </div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Conditions de paiement & sécurité</h2>
                <p className="text-gray-600 mb-4">Dernière mise à jour : 11 October 2025</p>
                
                <div className="space-y-6">
                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Moyens de paiement acceptés</h3>
                    <p className="text-gray-700 mb-3">Nous acceptons les moyens de paiement suivants :</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Cartes bancaires (Visa, Mastercard, American Express, Discover)</li>
                      <li>PayPal</li>
                      <li>Apple Pay</li>
                      <li>Google Pay</li>
                      <li>Shop Pay</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Traitement des paiements</h3>
                    <p className="text-gray-700">
                      Les transactions sont traitées de manière sécurisée via nos partenaires conformes PCI. Vos données de paiement sont chiffrées et ne sont jamais stockées sur nos serveurs. Le débit intervient au moment de la commande.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Tarifs et taxes</h3>
                    <p className="text-gray-700">
                      Les prix sont indiqués en dirhams marocains (MAD) et peuvent évoluer sans préavis. Les taxes applicables sont calculées à la validation de la commande selon votre adresse de livraison.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Paiements refusés</h3>
                    <p className="text-gray-700">
                      En cas d’échec du paiement, la commande ne sera pas validée. Vous recevrez un e-mail pour mettre à jour vos informations de paiement et retenter la transaction.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Traitement des remboursements</h3>
                    <p className="text-gray-700">
                      Les remboursements sont effectués sur le moyen de paiement initial. Prévoyez 5 à 10 jours ouvrés pour voir apparaître le crédit selon votre banque ou organisme émetteur.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Sécurité</h3>
                    <p className="text-gray-700">
                      Nous utilisons un chiffrement SSL conforme aux standards du secteur pour sécuriser vos données. Notre site est régulièrement audité afin d’identifier et corriger les potentielles vulnérabilités.
                    </p>
                  </section>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;