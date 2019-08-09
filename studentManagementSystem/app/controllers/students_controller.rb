class StudentsController < ApplicationController
	 protect_from_forgery with: :null_session
	def index
		students = Student.all
		render json: students
		# respond_with Student.all
	end

	def create
		# respond_with Student.create(student_params.merge)
		student = Student.new(student_params)
		student.save
	end

	private
		def student_params
			params.require(:student).permit(:roll_no, :name, :address, :standard)
		end

end
