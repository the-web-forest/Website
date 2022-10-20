import Certificate from '../core/domain/Certificate';
import webforestApiClient from '../external/webforestApiClient';

export default class CertificatesService {
  async getByCode(code: string): Promise<Certificate | string> {
    try {
      const response = await webforestApiClient.get('/CertificateValidate?CertificateId=' + code);

      const foundCertificate = new Certificate({
        id: response.data.id,
        name: response.data.name,
        certificateUrl: response.data.certificateUrl,
        createtAt: response.data.createtAt,
        updatedAt: response.data.updatedAt
      });

      return foundCertificate;
    } catch (err: any) {
      if (err.response.status === 404)
        return "O número de autenticação digitado é inválido.";
      else
        return "Erro ao tentar encontrar o certificado, contacte o suporte.";
    }
  }
}