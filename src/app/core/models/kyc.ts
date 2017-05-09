export class Kyc {
  id: number;
  document_image_url: string;
  document_id: string;
  document_type: string;
  name: string;
  nationality: string;
  birth_date: Date;
  user_id: number;

  constructor() {
    this.id = null;
    this.document_image_url = '';
    this.document_id = '';
    this.document_type = '';
    this.name = '';
    this.nationality = '';
    this.birth_date = new Date();
    this.user_id = null;
  }

}
