export default interface Comment {
  id?: string;
  content: string;
  status: "approved" | "rejected" | "pending"
}
