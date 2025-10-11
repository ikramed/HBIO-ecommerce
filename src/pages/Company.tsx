import React, { useState } from 'react';
import { Leaf, Award, Users, Globe } from 'lucide-react';

const Company: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            À propos de <span className="text-emerald-600">Hbio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous mettons la puissance de la nature au service de soins efficaces et durables,
            respectueux de votre peau comme de l’environnement.
          </p>
        </div>
      </section>

      {/* Our Story fixe sans animation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre histoire</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Fondée en 2018, Hbio est née d’une conviction simple : la nature renferme la clé d’une beauté authentique. Botanisistes et passionnés de skincare, nos fondateurs déploraient l’absence de soins réellement naturels et performants.
              </p>
              <p>
                Dans un petit laboratoire, nous avons expérimenté des remèdes botaniques ancestraux et des techniques d’extraction innovantes. Notre avancée majeure ? Une méthode d’extraction à froid exclusive qui conserve toute la puissance des plantes.
              </p>
              <p>
                Aujourd’hui, des milliers de clients à travers le monde font confiance à Hbio et partagent notre engagement pour une beauté naturelle, durable et éthique.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/assets/vue-de-cote-femme-experience-sur-pousse.jpg"
              alt="Notre histoire"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos valeurs</h2>
            <p className="text-xl text-gray-600">Les principes qui guident chacune de nos actions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: <Leaf className="h-8 w-8" />,
              title: 'Pureté naturelle',
              description: 'Nous sélectionnons des ingrédients d’exception, sans substances controversées ni additifs synthétiques.'
            }, {
              icon: <Award className="h-8 w-8" />,
              title: 'Excellence qualité',
              description: 'Chaque soin est soumis à des tests rigoureux pour garantir sécurité et efficacité optimales.'
            }, {
              icon: <Users className="h-8 w-8" />,
              title: 'Client avant tout',
              description: 'Votre satisfaction et la santé de votre peau sont nos priorités. Nous restons à l’écoute pour progresser sans cesse.'
            }, {
              icon: <Globe className="h-8 w-8" />,
              title: 'Respect de la planète',
              description: 'Nous adoptons des pratiques responsables pour préserver l’environnement et les générations futures.'
            }].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-emerald-600 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Notre mission</h2>
          <p className="text-xl text-emerald-100 leading-relaxed">
            Rendre la beauté naturelle accessible à tous grâce à des soins efficaces et durables,
            célébrant la sagesse végétale et l’innovation scientifique. Quand on est fier de ce que
            l’on applique sur sa peau, on révèle sa beauté avec confiance.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre équipe</h2>
            <p className="text-xl text-gray-600">Des passionnés qui font rayonner Hbio au quotidien</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              name: 'Ismail Ziani',
              role: 'Fondateur & Directeur Général',
              bio: 'Passionné par les produits naturels et le bien-être, Ismail est le créateur du concept HBIO. Il supervise la vision, la qualité et le développement global des produits ainsi que du site.',
              image: '/assets/WhatsApp Image 2025-10-11 at 19.44.59_edcd0420.jpg'
            }, {
              name: 'Asmae',
              role: 'Responsable Design Visuel',
              bio: 'Spécialisée en design visuel, Asmae crée les visuels et présentations des produits HBIO, en veillant à une identité moderne, naturelle et harmonieuse.',
              image: '/assets/download (11).jpeg'
            }, {
              name: 'Ikram Eddahby',
              role: 'Développeuse Front-End',
              bio: 'Spécialisée en développement web moderne, Ikram est responsable de la conception visuelle et de l’expérience utilisateur du site HBIO, garantissant une navigation fluide et esthétique.',
              image: 'src/pages/assets_task_01k7ary4svf6sv18vp34mkbebp_1760224635_img_1.webp'
            }].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-105">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability fixe sans animation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Engagés pour la durabilité</h2>
            <div className="space-y-4 text-gray-700">
              <p>Emballages zéro déchet : Tous nos contenants sont conçus à partir de matières recyclées et entièrement recyclables.</p>
              <p>Livraisons neutres en carbone : Nous compensons 100 % de nos émissions de transport via des crédits carbone certifiés.</p>
              <p>Ingrédients équitables : Nous collaborons directement avec les cultivateurs pour assurer une juste rémunération et des pratiques responsables.</p>
              <p>1 % pour la planète : Nous reversons 1 % de notre chiffre d’affaires annuel à des associations de protection de l’environnement.</p>
            </div>
          </div>
          <div>
            <img
              src="/assets/vue-de-dessus-main-tenant-le-paquet-de-furoshiki.jpg"
              alt="Durabilité"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Des questions ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nous serions ravis d’échanger avec vous. Contactez notre équipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ikram22eddahby@gmail.com"
              className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
            >
              Nous contacter
            </a>
            <a
              href="/support"
              className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-colors duration-200"
            >
              Consulter le support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
