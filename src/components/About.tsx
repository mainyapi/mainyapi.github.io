// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Hakkımızda</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">

        <div className="text-gray-800 text-lg leading-relaxed space-y-6">


          <p>
            MAİN YAPI, inşaat ve doğal taş sektörlerinde kalite, güven ve estetiği bir araya getiren proje çözümleri sunmaktadır. Kurumsal yapısı, deneyimli kadrosu ve güçlü teknik altyapısıyla, her ölçekte projeye değer katmayı hedeflemektedir.

          </p>

          <p>
            Üretim süreçlerimizde malzeme seçiminden montaja kadar tüm aşamalarda titizlikle çalışıyor; uzun ömürlü, fonksiyonel ve estetik yapılar inşa ediyoruz. Teknolojiyi yakından takip ederek kendimizi sürekli geliştiriyor, sürdürülebilir ve çevreye duyarlı projelerle geleceği şekillendiriyoruz.

          </p>

          <p>
            Müşteri memnuniyetini her zaman ön planda tutan MAİN YAPI, etik değerlere bağlı kalarak sektörde güvenilir bir çözüm ortağı olmaya devam etmektedir.

          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;