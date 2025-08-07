// src/components/Contact.tsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'; // Yeni ikonlar ekledik

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">İletişim</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12"> {/* gap ekledik */}
          {/* Sol Kısım: İletişim Bilgileri */}
          <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col justify-center"> {/* justify-center ekledik */}
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Bize Ulaşın</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Her türlü soru, öneri ve iş birliği talebiniz için bizimle iletişime geçebilirsiniz. En kısa sürede size geri dönüş yapacağız.
            </p>
            <div className="space-y-4"> {/* İletişim bilgileri arasına boşluk */}
              <div className="flex items-center text-gray-700 text-lg">
                <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                <span>Mahmutbey Mah. Taşocağı Yolu Cad. Polat Tower No:1 İç Kapı No:98 Bağcılar / İSTANBUL</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <Phone className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                <span>+90 212 812 62 46</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <Mail className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                <span>info@mainyapi.com</span>
              </div>
            </div>
          </div>

          {/* Sağ Kısım: Harita */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 md:hidden text-center">Konumumuz</h3> {/* Mobil için başlık */}


            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1326.1342440365781!2d28.81030919904696!3d41.045969089494385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa506342eca3f%3A0x584b21c374f7c411!2sMain%20Yap%C4%B1!5e0!3m2!1str!2str!4v1754503801500!5m2!1str!2str"
              width="100%"
              height="450" // Harita yüksekliğini artırdık
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md w-full h-full" // w-full h-full ile parent'ına yayılmasını sağladık
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;