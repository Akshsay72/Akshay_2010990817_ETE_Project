
import { Box, Typography, styled } from '@mui/material';
import i1 from '../Assets/Images/img1.jpg';
import i2 from '../Assets/Images/img2.jpg';
import i3 from '../Assets/Images/img3.jpg';
import i4 from '../Assets/Images/img7.jpg';
import i5 from '../Assets/Images/img4.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '20%',
    height: '20%'
});

const CodeForInterview = () => {

    return (
        <Header>
            <Typography variant="h4">Course Management System</Typography>
            <p>
                Course Managment Systems (CMS) are a set of tools that enables the instructor to create online course content and post it on the Web.

                A course management system (CMS)  tools provide an online environment for course interactions. A CMS typically includes a variety of online tools and environments, such as:

                An area for faculty posting of class materials such as course syllabus and handouts
                An area for student posting of papers and other assignments
                A gradebook where faculty can record grades and each student can view his or her grades
                An integrated email tool allowing participants to send announcement email messages to the entire class or to a subset of the entire class
                A chat tool allowing synchronous communication among class participants
                A threaded discussion board allowing asynchronous communication among participants
                In addition, a CMS is typically integrated with other databases in the university so that students enrolled in a particular course are automatically registered in the CMS as participants in that course.

                The decision to use a CMS in a traditional face-to-face course has implications for course design that often go unnoticed by instructors in their initial use of such systems. This module lists technical and pedagogical tips that instructors should consider as they place materials into a CMS.
            </p>
            <Box style={{ display: 'flex' }}>
                <Image src={i1} />
            </Box>
            <Box style={{ display: 'flex' }}>
                <Image src={i2} />
                <p>
                    <b>C++</b> is a general-purpose, free-form programming language created by Bjarne Stroustrup in 1979 at
                    Bell Labs in Murray Hill, New Jersey, as an enhancement to the C language. Since it is an extension of C,
                    it is also known as C with classes.
                    It was specifically designed with an orientation towards large systems and resource-constrained software.
                    Since its inception, C++ has expanded significantly over time. The latest version (C++20) has object-oriented,
                    functional, and generic features in addition to low-level memory manipulation.
                    The biggest advantage of C++ is that it is super scalable and allows developers to have a lot of control over how their applications use up resources.
                </p>
            </Box>
            <Box style={{ display: 'flex' }}>
                <Image src={i3} />
                <p>
                    <b>Java</b> is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others.
                    The rules and syntax of Java are based on the C and C++ languages.
                    One major advantage of developing software with Java is its portability.
                    Once you have written code for a Java program on a notebook computer, it is very easy to move the code to a mobile device.
                    When the language was invented in 1991 by James Gosling of Sun Microsystems (later acquired by Oracle),
                    the primary goal was to be able to "write once, run anywhere".
                </p>
            </Box>
            <Box style={{ display: 'flex' }}>
                <Image src={i4} />
                <p>
                    <b>Cybersecurity</b> is the protection to defend internet-connected devices and services from malicious attacks by hackers, spammers,and cybercriminals.
                    The practice is used by companies to protect against phishing schemes, ransomware attacks, identity theft, data breaches, and
                    financial lossesThe 3 major types of cyber security are network security, cloud security, and physical security.
                    Your operating systems and network architecture make up your network security. It can include network protocols, firewalls, wireless access points, hosts, and servers.
                </p>
            </Box>
            <Box>
                <Image src={i5} />
                <p>
                <b>Database management system (or DBMS)</b> is essentially nothing more than a computerized data-keeping system. Users of the system are given facilities to perform several kinds of operations on such a system for either manipulation of the data in the database or the management of the database structure itself. Database Management Systems (DBMSs) are categorized according to their data structures or types.
                There are several types of databases that can be used on a mainframe to exploit z/OS®: inverted list, hierarchic, network, or relational.
                Mainframe sites tend to use a hierarchical model when the data structure (not data values) of the data needed for an application is relatively static. For example, a Bill of Material (BOM) database structure always has a high level assembly part number, and several levels of components with subcomponents. The structure usually has a component forecast, cost, and pricing data, and so on. The structure of the data for a BOM application rarely changes, and new data elements (not values) are rarely identified. An application normally starts at the top with the assembly part number, and goes down to the detail components.
                Hierarchical and relational database systems have common benefits. RDBMS has the additional, significant advantage over the hierarchical DB of being non-navigational. By navigational, we mean that in a hierarchical database, the application programmer must know the structure of the database. The program must contain specific logic to navigate from the root segment to the desired child segments containing the desired attributes or elements. The program must still access the intervening segments, even though they are not needed.
                The remainder of this section discusses the relational database structure.
                What structures exist in a relational database?
                Relational databases include the following structures:
                Database
                A database is a logical grouping of data. It contains a set of related table spaces and index spaces. Typically, a database contains all the data that is associated with one application or with a group of related applications. You could have a payroll database or an inventory database, 
                for example :-
                Table
                A table is a logical structure made up of rows and columns. Rows have no fixed order, so if you retrieve data you might need to sort the data. The order of the columns is the order specified when the table was created by the database administrator. At the intersection of every column and row is a specific data item called a value, or, more precisely, an atomic value. A table is named with a high-level qualifier of the owner's user ID followed by the table name, for example TEST.DEPT or PROD.DEPT. There are three types of tables:
                A base table that is created and holds persistent data
                A temporary table that stores intermediate query results
                A results table that is returned when you query tables.
                </p>
            </Box>
        </Header>
    )
}

export default CodeForInterview;