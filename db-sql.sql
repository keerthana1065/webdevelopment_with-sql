
--
-- Database: `portfolio_form`
--

- Create database
CREATE DATABASE IF NOT EXISTS `portfolio_form` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `portfolio_form`;

-- Drop old table if exists
DROP TABLE IF EXISTS `form_datas`;

-- Create table
CREATE TABLE `form_datas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_contact`
--
ALTER TABLE `form_datas`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `form_datas`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;



