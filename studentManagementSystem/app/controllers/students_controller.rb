class StudentsController < ApplicationController
	 protect_from_forgery with: :null_session
	def index
		@students = Student.all
		render json: @students
	end

	def create
		student = Student.new(student_params)
		student.save
	end

	def show
		student = Student.find((params[:id]))
		render	json: student
	end

  def update
    @students = Student.find(params[:id])
    if @students.update(student_params)
      render json: @students
    end
  end

  def destroy
    @students = Student.find(params[:id])
    @students.destroy
    render json: @students
  end

	private
		def student_params
			params.require(:student).permit(:roll_no, :name, :address, :standard)
		end

end
