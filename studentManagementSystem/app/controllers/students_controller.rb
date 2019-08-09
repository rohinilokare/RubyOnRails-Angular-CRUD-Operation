class StudentsController < ApplicationController
	 protect_from_forgery with: :null_session
	def index
		@students = Student.all
	end

	def create
		student = Student.new(student_params)
		student.save
	end

	private
		def student_params
			params.permit(:roll_no, :name, :address, :standard)
		end

end
