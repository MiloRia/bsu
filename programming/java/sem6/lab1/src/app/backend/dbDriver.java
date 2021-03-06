/**
 * Created by Drapegnik on 23.03.17.
 */
package app.backend;


import app.models.Mark;
import app.models.Student;

import java.util.List;

/**
 * <p>Abstract class for common work with storage</p>
 *
 * @author Ivan Pazhitnykh
 * @version 1.0
 */
abstract public class dbDriver {
    /**
     * Get all {@link Student}'s objects from storage
     *
     * @return <pre>{@code List<Student>}</pre> {@link Student}'s objects
     */
    public abstract List<Student> getStudents();

    /**
     * Get all {@link Student}'s objects from storage
     * that have 3 and more bad (1, 2, 3) marks
     *
     * @return <pre>{@code List<String>} students_ids</pre>
     */
    public abstract List<String> getBadStudentsIds();

    /**
     * Delete {@link Student} and all his {@link Mark}s from storage
     *
     * @param id {@link Student#id}
     */
    public abstract void deleteStudent(String id);

    /**
     * Create and save {@link Student} object in storage
     *
     * @param student {@link Student} instance
     */
    public abstract void createStudent(Student student);

    /**
     * Create {@link Mark} object in storage
     *
     * @param mark {@link Mark} instance
     */
    public abstract void createMark(Mark mark);
}
