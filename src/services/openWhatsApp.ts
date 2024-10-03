export function openWhatsApp() {
  const phoneNumber = '556199670870';
  const message = `Olá! Estou visitando o site e gostaria de saber mais sobre os serviços de captação de imagens aéreas com drones.\nPoderia me passar mais informações, por favor?`;
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
