import Certificate from '../core/domain/Certificate';
import webforestApiClient from '../external/webforestApiClient';

export default class CertificatesService {
  async getByCode(code: string): Promise<Certificate | number> {
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
      try {
        return err.response.status;
      } catch {
        return 400;
      }
    }
  }
}