class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.text :roll_no
      t.text :name
      t.text :address
      t.text :standard

      t.timestamps
    end
  end
end
