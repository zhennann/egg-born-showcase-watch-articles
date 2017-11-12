export MYSQL_APT_CONFIG_FILE=mysql-apt-config_0.7.2-1_all.deb
wget http://dev.mysql.com/get/$MYSQL_APT_CONFIG_FILE
sudo dpkg -i $MYSQL_APT_CONFIG_FILE
sudo apt-get -y update
sudo apt-get -y install mysql-server-5.7 mysql-client-core-5.7 mysql-client-5.7
sudo mysql_upgrade -u root
sudo service mysql restart
mysql -u root -e "CREATE DATABASE `watch-articles` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
