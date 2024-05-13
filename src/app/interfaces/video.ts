export interface Video {
  "id" : number,
  "titulo" : string,
  "descripcion": string,
  "apto_menores": number,
  "canal_id": number,
  "created_at" ?: Date,
  "updated_at" ?: Date,
  "comentarios": [],
  'files' : FilesVideo[]
}

export interface FilesVideo {
  "id" : number,
  "name": string,
  "file_path": string,
  "video_id": number,
  "created_at" ?: Date,
  "updated_at"?: Date
}
