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

  def update
    @students = Student.find(params[:id])
    if @students.update(student_params)
      render json: @students
    end
  end

	private
		def student_params
			params.require(:student).permit(:roll_no, :name, :address, :standard)
		end

end
