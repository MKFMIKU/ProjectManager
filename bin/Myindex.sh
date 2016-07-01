PROJECT_PATH = '/home/wwwroot/Myindex'

echo "--Auto Deploy--"
cd $PROJECT_PATH
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git pull
git checkout master
pm2 restart 0
echo "Finished."