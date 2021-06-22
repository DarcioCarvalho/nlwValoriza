import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

// A instrução "as" é um alias
import { v4 as uuid } from "uuid"

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: String;

  @Column()
  name: String;

  @Column()
  email: String;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { User };
