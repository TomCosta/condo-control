//MODELO DE UM AVISO

export class AnnouncementModel {
  user: string; //quem escreveu -> ISSO VIRA UM OBJETO DEPOIS CONTENDO NOME, AP...
  dueDate: Date; //data de validade
  datePosted: Date; //data de postagem
  announcementTitle: string; //título do anúncio
  announcementBody: string; //descricao do aviso
  type: string; //tipo de aviso...

  constructor(user: string, datePosted: Date, announcementTitle: string, announcementBody: string, type: string, dueDate?: Date) {
    this.user = user;
    this.datePosted = datePosted;
    this.announcementTitle = announcementTitle;
    this.announcementBody = announcementBody;
    this.type = type;
    this.dueDate = dueDate;
  }
}
